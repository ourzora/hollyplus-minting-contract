import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { deployments, ethers } from "hardhat";

import type { MintableArtistCollection } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("MintableArtistCollection", () => {
  let mintableArtistInstance: MintableArtistCollection;
  let signer: SignerWithAddress;
  let signerAddress: string;
  let signer1: SignerWithAddress;
  let signer1Address: string;

  beforeEach(async () => {
    await deployments.fixture(["MintableArtistCollection"]);
    const deployment = await deployments.get("MintableArtistCollection");
    mintableArtistInstance = (await ethers.getContractAt(
      "MintableArtistCollection",
      deployment.address,
      signer
    )) as MintableArtistCollection;
    const signers = await ethers.getSigners();
    signer = signers[0];
    signerAddress = await signer.getAddress();
    signer1 = signers[1];
    signer1Address = await signer1.getAddress();
  });

  describe("minting", () => {
    it("creates a NFT", async () => {
      await mintableArtistInstance.mint(
        signer1Address,
        "ipfs://CID_TEST_METADATA",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        "ipfs://CID_TEST_CONTENT",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        signer1Address,
        signerAddress,
        100
      );

      const owner = await mintableArtistInstance.ownerOf(1);
      expect(owner).to.be.equal(signer1Address);

      const tokenURI = await mintableArtistInstance.tokenURI(1);
      expect(tokenURI).to.equal("ipfs://CID_TEST_METADATA");

      expect(await mintableArtistInstance.submitter(1)).to.be.equal(
        signer1Address
      );
      expect(await mintableArtistInstance.tokenContentURI(1)).to.be.equal(
        "ipfs://CID_TEST_CONTENT"
      );
    });
    it("returns supports ERC721 interface", async () => {
      expect(await mintableArtistInstance.supportsInterface("0x80ac58cd")).to.be
        .true;
    });
    it("does not allow non-creators to mint an nft", async () => {
      await expect(
        mintableArtistInstance
          .connect(signer1)
          .mint(
            signer1Address,
            "ipfs://CID_TEST_METADATA",
            "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
            "ipfs://CID_TEST_CONTENT",
            "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
            signer1Address,
            signerAddress,
            100
          )
      ).to.be.revertedWith(
        `AccessControl: account ${signer1Address.toLowerCase()} is missing role 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6`
      );
    });
    it("allows burning", async () => {
      await mintableArtistInstance.mint(
        signerAddress,
        "ipfs://CID_TEST_METADATA",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        "ipfs://CID_TEST_CONTENT",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        signer1Address,
        signerAddress,
        100
      );
      await mintableArtistInstance.burn(1);
      await expect(mintableArtistInstance.ownerOf(1)).to.be.revertedWith("");
    });
    it("does not allow burning by non-owner", async () => {
      await mintableArtistInstance.mint(
        signer1Address,
        "ipfs://CID_TEST_METADATA",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        "ipfs://CID_TEST_CONTENT",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        signer1Address,
        signerAddress,
        100
      );
      await expect(mintableArtistInstance.burn(1)).to.be.revertedWith("Not Owner");
      expect(await mintableArtistInstance.ownerOf(1)).to.be.equal(signer1Address);
    });
  });
  describe("maintains an NFT", () => {
    beforeEach(async () => {
      await mintableArtistInstance.mint(
        signer1Address,
        "ipfs://CID_TEST_METADATA",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        "ipfs://CID_TEST_CONTENT",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        signer1Address,
        signerAddress,
        100
      );
      await mintableArtistInstance.mint(
        signerAddress,
        "ipfs://CID_TEST_METADATA",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        "ipfs://CID_TEST_CONTENT",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        signer1Address,
        signerAddress,
        10
      );
    });
    it("returns supports royalty interface", async () => {
      expect(await mintableArtistInstance.supportsInterface("0x2a55205a")).to.be
        .true;
    });
    it("handles updating royalty info", async () => {
      expect((await mintableArtistInstance.royaltyInfo(1, 0))[0]).to.be.equal(
        signerAddress
      );
      await mintableArtistInstance.updateRoyaltyInfo(1, signer1Address);
      expect((await mintableArtistInstance.royaltyInfo(1, 0))[0]).to.be.equal(
        signer1Address
      );
    });
    it("shows royalty payout information correctly", async () => {
      const royaltyInfo = await mintableArtistInstance.royaltyInfo(
        1,
        ethers.utils.parseEther("1")
      );
      expect(royaltyInfo[0]).to.be.equal(signerAddress);
      expect(royaltyInfo[1]).to.be.equal(ethers.utils.parseEther("0.01"));
    });
    it("allows base url updates from MAINTAINER role", async () => {
      const owner = await mintableArtistInstance.ownerOf(1);
      expect(owner).to.be.equal(signer1Address);

      const tokenURI = await mintableArtistInstance.tokenURI(1);
      expect(tokenURI).to.equal("ipfs://CID_TEST_METADATA");

      expect(
        await mintableArtistInstance.updateTokenURIs(
          1,
          "https://ipfs.io/ipfs/IPFS_CID_META",
          "https://ipfs.io/ipfs/IPFS_CID_CONTENT"
        )
      ).to.emit(mintableArtistInstance, "URIsUpdated");
      expect(await mintableArtistInstance.tokenURI(1)).to.equal(
        "https://ipfs.io/ipfs/IPFS_CID_META"
      );
    });
  });
});
