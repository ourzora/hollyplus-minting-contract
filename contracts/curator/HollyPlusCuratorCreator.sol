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

pragma solidity 0.8.5;
pragma experimental ABIEncoderV2;

import "hardhat/console.sol";

import "./HollyPlusCurator.sol";
import "./InitializedProxy.sol";


contract HollyPlusCuratorCreator {
    address private wethAddress;
    address private auctionHouseAddress;
    address private hollyPlusContract;
    address public immutable logic;

    event HollyPlusCuratedAuction(
        address newCurator,
        address creator,
        uint256 tokenId
    );

    mapping(uint256 => HollyPlusCurator) public curatorByAuctionId;

    event Constructed();

    constructor(
        address _wethAddress,
        address _auctionHouseAddress,
        address _hollyPlusContract
    ) public {
        wethAddress = _wethAddress;
        auctionHouseAddress = _auctionHouseAddress;
        hollyPlusContract = _hollyPlusContract;

        logic = address(
            new HollyPlusCurator(
                _wethAddress,
                _auctionHouseAddress,
                _hollyPlusContract
            )
        );

        emit Constructed();
    }

    function startAuction(
        uint256 _tokenId,
        uint8 _tokenCreatorPercentage,
        address _artistPayout,
        uint8 _artistPercentage,
        uint256 auctionDuration,
        uint256 reservePrice,
        uint8 curatorFeePercentage
    ) external returns (address) {
        bytes memory _initializationCalldata = abi.encodeWithSignature(
            "initialize(uint256,uint8,address,uint8)",
            _tokenId,
            _tokenCreatorPercentage,
            _artistPayout,
            _artistPercentage
        );

        HollyPlusCurator hollyPlusCuratorProxy = HollyPlusCurator(payable(address(
            new InitializedProxy(logic, _initializationCalldata)
        )));

        uint256 auctionId = IAuctionHouse(auctionHouseAddress).createAuction(
            _tokenId,
            hollyPlusContract,
            auctionDuration,
            reservePrice,
            payable(hollyPlusCuratorProxy),
            curatorFeePercentage,
            address(0x0)
        );

        // todo rm to save gas
        curatorByAuctionId[auctionId] = hollyPlusCuratorProxy;

        hollyPlusCuratorProxy.setAuctionAndApprove(auctionId);

        emit HollyPlusCuratedAuction(
            address(hollyPlusCuratorProxy),
            msg.sender,
            _tokenId
        );

        return address(hollyPlusCuratorProxy);
    }

    function finalizeAuction(uint256 _auctionId) public {
        curatorByAuctionId[_auctionId].finalize();
    }
}
