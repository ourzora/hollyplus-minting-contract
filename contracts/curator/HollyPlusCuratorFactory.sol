// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.5;
pragma experimental ABIEncoderV2;

import "./HollyPlusCurator.sol";
import "./InitializedProxy.sol";

contract HollyPlusCuratorFactory {
    address private wethAddress;
    address private auctionHouseAddress;
    address private hollyPlusContract;
    address public immutable logic;

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
    }

    function startAuction(
        uint256 _tokenId,
        uint8 _tokenCreatorPercentage,
        address _artistPayout,
        uint8 _artistPercentage,
        uint256 auctionDuration,
        uint256 reservePrice,
        uint8 curatorFeePercentage
    ) external returns (address hollyPlusCuratorProxy) {
        bytes memory _initializationCalldata = abi.encodeWithSignature(
            "initialize(uint256,uint8,address,uint8,uint256,uint256,uint8)",
            _tokenId,
            _tokenCreatorPercentage,
            _artistPayout,
            _artistPercentage,
            auctionDuration,
            reservePrice,
            curatorFeePercentage
        );

        hollyPlusCuratorProxy = address(
            new InitializedProxy(logic, _initializationCalldata)
        );

        // emit HollyPlusCuratedAuction(
        //     hollyPlusCuratorProxy,
        //     msg.sender,
        //     _tokenId,
        //     _tokenCreatorPercentage,
        //     _artistPayout,
        //     _artistPercentage,
        // );
    }
}
