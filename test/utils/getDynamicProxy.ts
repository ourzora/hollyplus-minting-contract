import { ethers } from "hardhat";
import { HollyPlusCurator } from "../../typechain";

export async function getCuratorForEventLogs(address: string) {
  // get logs emitted from PartyBid Factory
  const logs = await ethers.provider.getLogs({ address });

  // parse events from logs
  const HollyPlusCuratorCreator = await ethers.getContractFactory(
    "HollyPlusCuratorCreator"
  );

  const events = logs.map((log) =>
    HollyPlusCuratorCreator.interface.parseLog(log)
  );

  console.log({logs, events})
  // extract hollyCurator proxy address from hollyCuratorDeployed log
  const hollyCuratorProxyAddress = events[0]["args"][0];

  return (await ethers.getContractAt(
    "HollyPlusCurator",
    hollyCuratorProxyAddress
  )) as HollyPlusCurator;
}
