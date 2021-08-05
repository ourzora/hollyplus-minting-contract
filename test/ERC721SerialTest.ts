import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { deployments, ethers } from "hardhat";

import type { MintableArtistCollection } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("MintableArtistCollection", () => {
  let mintableArtistInstance: MintableArtistCollection;
  let signer: SignerWithAddress;
  let signerAddress: string;

  beforeEach(async () => {
    await deployments.fixture(["MintableArtistCollection"]);
    const deployment = await deployments.get("MintableArtistCollection");
    mintableArtistInstance = (await ethers.getContractAt(
      "MintableArtistCollection",
      deployment.address,
      signer
    )) as MintableArtistCollection;
    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  describe("minting", () => {
    let signer1: SignerWithAddress;
    let signer1Address: string;
    beforeEach(async () => {
      signer1 = (await ethers.getSigners())[1];
      signer1Address = await signer1.getAddress();
    });

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

      expect(
        await mintableArtistInstance.royaltyInfo(
          1,
          ethers.utils.parseEther("1")
        )
      ).to.equal(null);
    });
    it("allows base url updates from MAINTAINER role", async () => {
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
        signer1Address,
        "ipfs://CID_TEST_METADATA",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        "ipfs://CID_TEST_CONTENT",
        "0x71d982e3051ea86cbe35e212af3726f73d688dee5970ce03a9272cccea34abe8",
        signer1Address,
        signerAddress,
        100
      );
      await mintableArtistInstance.connect(signer1).burn(1);
      await expect(mintableArtistInstance.ownerOf(1)).to.be.revertedWith("");
    });
  });
});
