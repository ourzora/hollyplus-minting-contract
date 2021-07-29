// SPDX-License-Identifier: MIT

/**

               .-://///:`                                                                 
            .:/-.`   `-+/-             `.....                                             
          -/:`         -+/             `./++-                            .-.              
        ./:`           `++`              /+:                             -+-              
      `:/-             `+/              -+/          ``  `               .+.              
     .//.              -+:              /+.       .:/+/:/+-              .+.              
    -+/`               /+.             -+:         `/+.`++.              .+.              
   :+/`               -+:             `//`          /+. ++.              .+.              
  :+/`               `//`             :+.           /+. ++.              .+.              
 /++:................:/:.............-+/......----  /+. ++. .---.........-+-........---::-
.-------------------:+:--------------//---:::::////`/+. ++.:///::::::----:+:--:::::::::/- 
                   .+/`             :+- `-::://:.   /+. ++.--::.    `:::..+.              
                  `/+.             .+/`:/.    `:+/. /+. ++.`-++.     //` .+.              
                 `/+:              //`:+-       :+/`/+. ++.  -+/`   :/`  .+.              
                 /+/              -+- /+:       `++-/+. ++.   :+/  -/`   .+.              
                :+/`             `//  :+/`      `+/`/+. ++.    :+:./.    .+.              
              ./++-              /+.   ://-`   .//. /+- ++.     /+/.     .+-              
             -::::.             -+:     `-:::::-.  -:::::::.    .+-      -/-              
                               `//`                            `/-  ``` -`  ` ``          
                               :+.                    ``      ./-   --.::-. /-::.         
                              .+:                     //:-..-:/.    -:-.-`---.--`         
                             `//`                      `.----`      `                     
                             :+-                                                          
                            .+/                                                           
                           `//`                                                           
                           :+:                                                            
                          .+/`                                                            
                         `/+.                                                             
                         /+/                                                              
                        :++.                                                              
                       -++/                                                               
                     `:////                                                               


*/

pragma solidity 0.8.5;
pragma experimental ABIEncoderV2;

import "hardhat/console.sol";

import "./HollyPlusCurator.sol";
import "./InitializedProxy.sol";


/*
    Forked from PartyBid v1
    Anna Carroll for PartyDAO
    Iain Nash for Zora
*/

pragma solidity 0.8.5;

import "hardhat/console.sol";

import "./interfaces/IAuctionHouse.sol";
import "../utils/ISubmitterPayoutInformation.sol";

import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable2/security/ReentrancyGuardUpgradeable.sol";
import {IWETH} from "./interfaces/IWETH.sol";

interface IAuctionHouseExtended is IAuctionHouse {
    // function auctions(uint256 auctionId)
    //     external
    //     view
    //     returns (IAuctionHouse.Auction memory);
}

contract HollyPlusCurator is ReentrancyGuardUpgradeable {
    event PaidOut(bool withWETH);

    // ============ Immutables ============
    address public immutable auctionHouseContract;
    address public immutable weth;
    address public immutable hollyPlusContract;

    // ============ Public Not-Mutated Storage ============
    // uint256 public tokenId;
    address public tokenCreatorPayout;
    uint8 public tokenCreatorPercentage;
    address public artistPayout;
    uint8 public artistPercentage;
    uint256 public auctionId;

    // ======== Constructor =========

    constructor(
        address _weth,
        address _auctionHouseContract,
        address _hollyPlusContract
    ) {
        auctionHouseContract = _auctionHouseContract;
        hollyPlusContract = _hollyPlusContract;
        weth = _weth;
    }

    // ======== Initializer =========

    function initialize(
        uint256 _tokenId,
        uint8 _tokenCreatorPercentage,
        address _artistPayout,
        uint8 _artistPercentage
    ) external initializer {
        // initialize ReentrancyGuard
        __ReentrancyGuard_init();

        tokenCreatorPayout = _getTokenCreator(_tokenId);
        tokenCreatorPercentage = _tokenCreatorPercentage;
        artistPayout = _artistPayout;
        artistPercentage = _artistPercentage;

        require(
            _artistPercentage + _tokenCreatorPercentage == 100,
            "Total fee needs to add up to 100%"
        );
    }

    function setAuctionAndApprove(uint256 _auctionId) public {
        auctionId = _auctionId;
        IAuctionHouse(auctionHouseContract).setAuctionApproval(_auctionId, true);
    }

    function _getTokenCreator(uint256 tokenId) internal view returns (address) {
        return
            ISubmitterPayoutInformation(hollyPlusContract)
                .getSubmitterPayoutInformation(tokenId);
    }

    function payout() public {
        uint256 balance = address(this).balance;
        if (balance == 0) {
            return;
        }
        _transferETHOrWETH(tokenCreatorPayout, (balance * tokenCreatorPercentage) / 100);
        _transferETHOrWETH(artistPayout, (balance * artistPercentage) / 100);

        emit PaidOut(false);
    }

    function payoutWETH() public {
        uint256 wethBalance = IWETH(weth).balanceOf(address(this));
        require(wethBalance > 0, "Needs to have WETH balance");
        IWETH(weth).transfer(
            tokenCreatorPayout,
            (wethBalance * tokenCreatorPercentage) / 100
        );
        IWETH(weth).transfer(
            artistPayout,
            (wethBalance * artistPercentage) / 100
        );
        emit PaidOut(true);
    }

    /**
     * @notice Finalize the state of the auction
     * @dev Emits a Finalized event upon success; callable by anyone
     */
    function finalize() external nonReentrant {
        if (IAuctionHouseExtended(auctionHouseContract).auctions(auctionId).approved) {
            console.log("ending auction");
            IAuctionHouse(auctionHouseContract).endAuction(auctionId);
        }

        payout();
    }

    // ============ Internal: TransferEthOrWeth ============

    /**
     * @notice Attempt to transfer ETH to a recipient;
     * if transferring ETH fails, transfer WETH insteads
     * @param _to recipient of ETH or WETH
     * @param _value value to send
     */
    function _transferETHOrWETH(address _to, uint256 _value) internal {
        console.log("transfer", _to, "value", _value);
        // Try to transfer ETH to the given recipient.
        if (!_attemptETHTransfer(_to, _value)) {
            // If the transfer fails, wrap and send as WETH
            IWETH(weth).deposit{value: _value}();
            IWETH(weth).transfer(_to, _value);
            // At this point, the recipient can unwrap WETH.
        }
    }

    /**
     * @notice Attempt to transfer ETH to a recipient
     * @dev Sending ETH is not guaranteed to succeed
     * this method will return false if it fails.
     * We will limit the gas used in transfers, and handle failure cases.
     * @param _to recipient of ETH
     * @param _value amount of ETH
     */
    function _attemptETHTransfer(address _to, uint256 _value)
        internal
        returns (bool)
    {
        // Here increase the gas limit a reasonable amount above the default, and try
        // to send ETH to the recipient.
        // NOTE: This might allow the recipient to attempt a limited reentrancy attack.
        (bool success, ) = _to.call{value: _value, gas: 30000}("");
        return success;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {
        console.log("has payout no data!");
        payout();
    }

    fallback() external payable {
        console.log("has payout data!");
        payout();
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
