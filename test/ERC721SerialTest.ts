import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { deployments, ethers } from "hardhat";
import parseDataURI from "data-urls";

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
        "CID_TEST_METADATA",
        "CID_TEST_CONTENT"
      );

      const owner = await mintableArtistInstance.ownerOf(1);
      expect(owner).to.be.equal(signer1Address);

      const tokenURI = await mintableArtistInstance.tokenURI(1);
      expect(tokenURI).to.equal("ipfs://CID_TEST_METADATA");
    });
  });
});
