// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.5;
pragma abicoder v2;

library LibPart {
    bytes32 public constant TYPE_HASH =
        keccak256("Part(address account,uint96 value)");

    struct Part {
        address payable account;
        uint96 value;
    }

    function hash(Part memory part) internal pure returns (bytes32) {
        return keccak256(abi.encode(TYPE_HASH, part.account, part.value));
    }
}

interface IRaribleRoyalites {
    function getRoyalties(uint256 id) external view returns (LibPart.Part[] memory);
}