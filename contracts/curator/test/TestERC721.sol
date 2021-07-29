// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.5;

import "@openzeppelin/contracts2/token/ERC721/ERC721.sol";

contract TestERC721 is ERC721 {
    constructor() public ERC721("TestERC721", "TEST") {}

    function mint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}
