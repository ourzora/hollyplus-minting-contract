import { ethers, deployments, getNamedAccounts } from "hardhat";
import { HollyPlus } from "../typechain";

async function main() {
  const { deployer } = await getNamedAccounts();
  const mintableCollectionAddress = (
    await deployments.get("HollyPlus")
  ).address;
  const mintableCollection = (await ethers.getContractAt(
    "HollyPlus",
    mintableCollectionAddress
  )) as HollyPlus;

  // metadataCid
  const metadataCid = "QmYAGKfkH2suYPMZH3vhT7eRPiDWeLhymwoXkK2KwkHwyT";
  // contentCid
  const contentCid = "QmRBvpEEBthCEctYjrN1NR7kWe7eZBFZbXVoM8KRTgXege";

  await mintableCollection.grantRole(await mintableCollection.MINTER_ROLE(), deployer);

  await mintableCollection.mint(deployer, metadataCid, contentCid, deployer);

  console.log(await mintableCollection.ownerOf(1));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
