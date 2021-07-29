import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { deployments, ethers } from "hardhat";

import type {
  HollyPlusCuratorCreator,
  Weth,
  MintableArtistCollection,
  AuctionHouse,
  TestErc721,
  HollyPlusCurator,
} from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

async function deploy(name: string, args: any = []) {
  const Implementation = await ethers.getContractFactory(name);
  const contract = await Implementation.deploy(...args);
  return contract.deployed();
}

describe("MintableArtistCollection", () => {
  let mintableArtistInstance: MintableArtistCollection;
  let signer: SignerWithAddress;
  let signerAddress: string;
  let weth: Weth;
  let auctionHouse: AuctionHouse;
  let hollyPlusCuratorFactory: HollyPlusCuratorCreator;

  beforeEach(async () => {
    await deployments.fixture(["MintableArtistCollection"]);
    const deployment = await deployments.get("MintableArtistCollection");
    mintableArtistInstance = (await ethers.getContractAt(
      "MintableArtistCollection",
      deployment.address,
      signer
    )) as MintableArtistCollection;

    weth = (await deploy("WETH")) as Weth;
    const testErc721 = (await deploy("TestERC721")) as TestErc721;
    auctionHouse = (await deploy("AuctionHouse", [
      testErc721.address,
      weth.address,
    ])) as AuctionHouse;
    hollyPlusCuratorFactory = (await deploy("HollyPlusCuratorCreator", [
      weth.address,
      auctionHouse.address,
      mintableArtistInstance.address,
    ])) as HollyPlusCuratorCreator;

    console.log({
      curatorFactoryAddress: hollyPlusCuratorFactory.address,
      auctionHouseAddress: auctionHouse.address,
    });

    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  describe("starting auction", () => {
    let signer1: SignerWithAddress;
    let signer1Address: string;
    beforeEach(async () => {
      signer1 = (await ethers.getSigners())[1];
      signer1Address = await signer1.getAddress();

      await mintableArtistInstance.mint(
        signer1Address,
        "CID_TEST_METADATA",
        "CID_TEST_CONTENT",
        signer1Address
      );
    });

    it("starts an auction", async () => {
      const owner = await mintableArtistInstance.ownerOf(1);
      expect(owner).to.be.equal(signer1Address);

      const tokenURI = await mintableArtistInstance.tokenURI(1);
      expect(tokenURI).to.equal("ipfs://CID_TEST_METADATA");

      await mintableArtistInstance
        .connect(signer1)
        .setApprovalForAll(auctionHouse.address, true);

      await mintableArtistInstance
        .connect(signer1)
        .approve(hollyPlusCuratorFactory.address, 1);

      expect(await mintableArtistInstance.getApproved(1)).to.be.equal(
        hollyPlusCuratorFactory.address
      );

      await hollyPlusCuratorFactory.connect(signer1).startAuction(
        1,
        // silly math scaling going on here, this is 60%*this = total%
        1,
        ethers.utils.parseEther("0.1"),
        50, // artist gets 50% of 50% meaning 25%
        50, // curator gets 50%, 25% goes to DAO, 25% goes to artist
      );

      // signer = 25%
      // creator (signer1) = 25%
      // other 50% = DAO seller (signer1)

      // 25% goes to signer = 25e
      // 75% goes to signer1 = 75e

      const curatorAddress = await hollyPlusCuratorFactory.curatorByAuctionId(
        0
      );
      const curator = (await ethers.getContractAt(
        "HollyPlusCurator",
        curatorAddress,
        signer
      )) as HollyPlusCurator;

      expect(await (await auctionHouse.auctions(0)).approved).to.be.true;

      const [_s1, _s2, s3] = await ethers.getSigners();
      await auctionHouse
        .connect(s3)
        .createBid(0, ethers.utils.parseEther("100"), {
          value: ethers.utils.parseEther("100"),
        });

      const startBalance = await signer.getBalance();
      const startBalance1 = await signer1.getBalance();

      // wins the auction due to time
      await ethers.provider.send("evm_setNextBlockTimestamp", [9617249934]);

      // finalize the auction via the proxy
      await hollyPlusCuratorFactory.finalizeAuction(0);

      expect(await mintableArtistInstance.ownerOf(1)).to.equal(
        await s3.getAddress()
      );

      expect(await ethers.provider.getBalance(curator.address)).to.equal(0);

      expect(
        parseInt(
          ethers.utils.formatEther(
            (await signer1.getBalance()).sub(startBalance1)
          )
        )
      ).to.be.approximately(75, 0.1);
      expect(
        parseFloat(
          ethers.utils.formatEther(
            (await signer.getBalance()).sub(startBalance)
          )
        )
        // sub one eth gas
      ).to.be.approximately(25, 0.1);
    });
  });
});
