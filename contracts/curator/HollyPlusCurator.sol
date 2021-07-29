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
/*
    Forked from PartyBid v1
    Anna Carroll for PartyDAO
    Iain Nash for Zora
*/

pragma solidity 0.8.5;

import "./interfaces/IAuctionHouse.sol";
import "../utils/ISubmitterPayoutInformation.sol";

import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable2/security/ReentrancyGuardUpgradeable.sol";
import {IWETH} from "./interfaces/IWETH.sol";

/**
   This defines a Zora curator contract with splits.
 */
contract HollyPlusCurator is ReentrancyGuardUpgradeable {
    event PaidOut(bool withWETH);

    // ============ Immutables ============
    address public immutable auctionHouseContract;
    address public immutable weth;
    address public immutable hollyPlusContract;

    // ============ Public Not-Mutated Storage ============
    uint256 public tokenId;
    uint8 private tokenCreatorPercentage;

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
    function initialize(uint8 _tokenCreatorPercentage, uint256 _tokenId)
        external
        initializer
    {
        // initialize ReentrancyGuard
        __ReentrancyGuard_init();

        tokenId = _tokenId;
        tokenCreatorPercentage = _tokenCreatorPercentage;

        require(
            _tokenCreatorPercentage < 100,
            "Token creator percentage needs to be less than 100%"
        );
    }

    function _getTokenCreator() internal view returns (address) {
        return
            ISubmitterPayoutInformation(hollyPlusContract)
                .getSubmitterPayoutInformation(tokenId);
    }

    function payout() public nonReentrant {
        uint256 balance = address(this).balance;
        if (balance == 0) {
            return;
        }
        _transferETHOrWETH(
            _getTokenCreator(),
            (balance * tokenCreatorPercentage) / 100
        );
        _transferETHOrWETH(
            ISubmitterPayoutInformation(hollyPlusContract).getArtistAuctionRoyaltyAddress(),
            (balance * (100 - tokenCreatorPercentage)) / 100
        );

        emit PaidOut(false);
    }

    // This is in the rare case that WETH is sent to this contract instead of ETH
    // then it can be recovered
    function payoutWETH() public nonReentrant {
        uint256 wethBalance = IWETH(weth).balanceOf(address(this));
        require(wethBalance > 0, "Needs to have WETH balance");
        IWETH(weth).transfer(
            _getTokenCreator(),
            (wethBalance * tokenCreatorPercentage) / 100
        );
        IWETH(weth).transfer(
            ISubmitterPayoutInformation(hollyPlusContract).getArtistAuctionRoyaltyAddress(),
            (wethBalance * (100 - tokenCreatorPercentage)) / 100
        );
        emit PaidOut(true);
    }

    function setAuctionAndApprove(uint256 _auctionId) public {
        IAuctionHouse(auctionHouseContract).setAuctionApproval(_auctionId, true);
    }

    // ============ Internal: TransferEthOrWeth ============

    /**
     * @notice Attempt to transfer ETH to a recipient;
     * if transferring ETH fails, transfer WETH insteads
     * @param _to recipient of ETH or WETH
     * @param _value value to send
     */
    function _transferETHOrWETH(address _to, uint256 _value) internal {
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
        payout();
    }

    fallback() external payable {
        payout();
    }
}
