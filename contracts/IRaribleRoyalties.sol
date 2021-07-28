// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
pragma abicoder v2;

library LibPart {
    bytes32 public constant TYPE_HASH = keccak256("Part(address account,uint96 value)");

    struct Part {
        address payable account;
        uint96 value;
    }

    function hash(Part memory part) internal pure returns (bytes32) {
        return keccak256(abi.encode(TYPE_HASH, part.account, part.value));
    }
}

interface IRaribleRoyalites {
    event RoyaltiesSet(uint256 tokenId, LibPart.Part[] royalties);
    function getRoyalties(address token, uint tokenId) external returns (LibPart.Part[] memory);
}