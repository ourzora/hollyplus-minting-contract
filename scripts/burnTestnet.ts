import { ethers, deployments } from "hardhat";
import { HollyPlus } from "../typechain";

async function main() {
  const mintableCollectionAddress = (
    await deployments.get("HollyPlus")
  ).address;
  const mintableCollection = (await ethers.getContractAt(
    "HollyPlus",
    mintableCollectionAddress
  )) as HollyPlus;

  let id = 2;
  console.log(await mintableCollection.burn(id));
}

main();