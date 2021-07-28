// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "./IERC2981.sol";

///
/// Impl for the NFT Royalty Standard
/// @author iain <iain@zora.co>
///
contract ERC2981 is IERC2981, ERC165 {
    uint256 private constant PERCENTAGE_SCALE = 10e5;
    event UpdatedRoyalty(address recipient, uint256 bps);

    struct RoyaltyInfo {
        uint256 bps;
        address receiver;
    }
    mapping(uint256 => RoyaltyInfo) royalties;

    function _setRoyaltyForToken(
        uint256 tokenId,
        address royaltyReciever,
        uint256 royaltyBPS
    ) internal virtual {
        emit UpdatedRoyalty(royaltyReciever, royaltyBPS);
        royalties[tokenId] = RoyaltyInfo({
            receiver: royaltyReciever,
            bps: royaltyBPS
        });
    }

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
        RoyaltyInfo memory royalty = royalties[tokenId];
        return (
            royalty.receiver,
            (salePrice * royalty.bps) * (100 * PERCENTAGE_SCALE)
        );
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    /// bytes4(keccak256("royaltyInfo(uint256,uint256)")) == 0x2a55205a
    /// bytes4 private constant _INTERFACE_ID_ERC2981 = 0x2a55205a;
    /// _registerInterface(_INTERFACE_ID_ERC2981);
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC2981)
        returns (bool)
    {
        return
            interfaceId == type(IERC2981).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
