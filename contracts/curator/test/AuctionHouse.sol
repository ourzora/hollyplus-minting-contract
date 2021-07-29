// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.8;
pragma experimental ABIEncoderV2;

import {AuctionHouse} from "@zoralabs/auction-house/dist/contracts/AuctionHouse.sol";

contract AuctionHouseTest is AuctionHouse {
    constructor(address _zora, address _weth) public AuctionHouse(_zora, _weth) {}
}
