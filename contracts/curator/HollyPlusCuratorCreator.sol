// SPDX-License-Identifier: GPL-3.0

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
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts2/access/AccessControl.sol";
import "./HollyPlusCurator.sol";
import "./InitializedProxy.sol";

contract HollyPlusCuratorCreator {
    address private wethAddress;
    address private auctionHouseAddress;
    address private hollyPlusContract;
    address public immutable logic;

    event HollyPlusCuratedAuction(
        address newCuratorAddress,
        address creator,
        uint256 tokenId
    );

    mapping(uint256 => HollyPlusCurator) public curatorByAuctionId;

    constructor(
        address _wethAddress,
        address _auctionHouseAddress,
        address _hollyPlusContract
    ) {
        wethAddress = _wethAddress;
        auctionHouseAddress = _auctionHouseAddress;
        hollyPlusContract = _hollyPlusContract;

        logic = address(
            new HollyPlusCurator(
                _wethAddress,
                _auctionHouseAddress,
                _hollyPlusContract,
                address(this)
            )
        );
    }

/**
  Anyone can list holly+ NFTs with this fn with preset arguments
  Note: approval needs to be set on the token to this contract (HollyPlusCuratorCreator)
        along with approvalforall with the AuctionHouse
        due to a detail as to how the contracts work.
 */
    function startAuction(
        uint256 _tokenId,
        uint256 numberOfDays,
        uint256 reservePrice
    ) public {
        // 18 * 60% =
        // 10% for the artist fee,
        // the other 50% goes to the original creator
        // and 40% goes to the dao.
        _startAuction(
            _tokenId,
            numberOfDays * 24 * 60 * 60,
            reservePrice,
            82,
            60
        );
    }

/**
   This needs token admin to override royalties for curation as needed
 */
    function startAuctionFull(
        uint256 _tokenId,
        uint256 auctionDuration,
        uint256 reservePrice,
        uint8 artistSplitOfCuratorPercentage,
        uint8 curatorFeePercentage
    ) public {
        require(
            AccessControl(hollyPlusContract).hasRole(
                AccessControl(hollyPlusContract).DEFAULT_ADMIN_ROLE(),
                msg.sender
            ),
            "admin needed"
        );
        _startAuction(
            _tokenId,
            auctionDuration,
            reservePrice,
            artistSplitOfCuratorPercentage,
            curatorFeePercentage
        );
    }

    // Should these be hard-coded arguments?
    function _startAuction(
        uint256 _tokenId,
        uint256 auctionDuration,
        uint256 reservePrice,
        uint8 artistSplitOfCuratorPercentage,
        uint8 curatorFeePercentage
    ) internal returns (address) {
        bytes memory _initializationCalldata = abi.encodeWithSignature(
            "initialize(uint8,uint256)",
            artistSplitOfCuratorPercentage,
            _tokenId
        );

        HollyPlusCurator hollyPlusCuratorProxy = HollyPlusCurator(
            payable(
                address(new InitializedProxy(logic, _initializationCalldata))
            )
        );

        uint256 auctionId = IAuctionHouse(auctionHouseAddress).createAuction(
            _tokenId,
            hollyPlusContract,
            auctionDuration,
            reservePrice,
            payable(hollyPlusCuratorProxy),
            curatorFeePercentage,
            address(0x0)
        );

        // allows for easy auction finalization
        curatorByAuctionId[auctionId] = hollyPlusCuratorProxy;

        hollyPlusCuratorProxy.setAuctionAndApprove(auctionId);

        emit HollyPlusCuratedAuction(
            address(hollyPlusCuratorProxy),
            msg.sender,
            _tokenId
        );

        return address(hollyPlusCuratorProxy);
    }

    // This combines the finalizeAuction and payout steps in one.
    // this will fail if the auction is not curated by this smart contract.
    function finalizeAuction(uint256 _auctionId) public {
        HollyPlusCurator curator = curatorByAuctionId[_auctionId];
        if (IAuctionHouse(auctionHouseAddress).auctions(_auctionId).approved) {
            IAuctionHouse(auctionHouseAddress).endAuction(_auctionId);
        }
        curator.payout();
    }

    // only the curator or creator can cancel the auction
    // this contract is the creator, the curator is the child contract
    // this will fail if the auction is not curated by this smart contract.
    function cancelAuction(uint256 _auctionId) public {
        curatorByAuctionId[_auctionId].cancelAuction(_auctionId);
    }
}
