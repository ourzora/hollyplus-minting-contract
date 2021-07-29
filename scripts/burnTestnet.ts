import { ethers, deployments } from "hardhat";
import { MintableArtistCollection } from "../typechain";

async function main() {
  const mintableCollectionAddress = (
    await deployments.get("MintableArtistCollection")
  ).address;
  const mintableCollection = (await ethers.getContractAt(
    "MintableArtistCollection",
    mintableCollectionAddress
  )) as MintableArtistCollection;

  let id = 2;
  console.log(await mintableCollection.burn(id));
}

main();