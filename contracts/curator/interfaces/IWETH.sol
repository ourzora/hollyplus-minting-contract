// SPDX-License-Identifier: MIT
pragma solidity 0.8.5;

// wish it didn't have to be this way, but i need to get the balance to split
abstract contract IWETH {
    function deposit() virtual external payable;

    function transfer(address to, uint256 value) virtual external returns (bool);
    mapping (address => uint)                       public  balanceOf;
}
