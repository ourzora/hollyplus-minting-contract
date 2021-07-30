// SPDX-License-Identifier: MIT

pragma solidity 0.8.5;

import "@openzeppelin/contracts2/utils/introspection/ERC165.sol";

import "./IERC2981.sol";

contract RoyaltyConfig is IERC2981, ERC165 {
    event UpdatedRoyalty(address recipient, uint256 bps);

    struct RoyaltyInfo {
        uint256 bps;
        address receiver;
    }
    mapping(uint256 => RoyaltyInfo) royalities;

    function _setRoyaltyForToken(
        address royaltyReciever,
        uint256 royaltyBPS,
        uint256 tokenId
    ) internal virtual {
        emit UpdatedRoyalty(royaltyReciever, royaltyBPS);
        royalities[tokenId] = RoyaltyInfo({
            receiver: royaltyReciever,
            bps: royaltyBPS
        });
    }

    uint256 private constant PERCENTAGE_SCALE = 10e5;

    /// @notice Called with the sale price to determine how much royalty
    //          is owed and to whom.
    /// @param tokenId - the NFT asset queried for royalty information
    /// @param salePrice - the sale price of the NFT asset specified by _tokenId
    /// @return receiver - address of who should be sent the royalty payment
    /// @return royaltyAmount - the royalty payment amount for _salePrice
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        override(IERC2981)
        returns (address receiver, uint256 royaltyAmount)
    {
        RoyaltyInfo memory royalty = royalities[tokenId];
        return (
            royalty.receiver,
            (salePrice * royalty.bps) * (100 * PERCENTAGE_SCALE)
        );
    }

    /*
     * bytes4(keccak256('getRoyalties(LibAsset.AssetType)')) == 0x44c74bcc
     */
    bytes4 private constant _INTERFACE_ID_ROYALTIES = 0x44c74bcc;
    bytes4 private constant _INTERFACE_ID_ERC2981 = 0x2a55205a;

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC2981)
        returns (bool)
    {
        return
            interfaceId == _INTERFACE_ID_ROYALTIES ||
            interfaceId == _INTERFACE_ID_ERC2981 ||
            super.supportsInterface(interfaceId);
    }
}
