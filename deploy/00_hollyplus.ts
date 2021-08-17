module.exports = async ({ getNamedAccounts, deployments, ethers }: any) => {
  const { deploy } = deployments;
  const { deployer, auctionHouse } = await getNamedAccounts();

  await deploy("HollyPlus", {
    from: deployer,
    args: ["HollyPlus+", "HOLLYPLUS"],
    log: true,
  });

  const mintableCollection = ethers.getContractAt(
    "HollyPlus",
    (await deployments.get("HollyPlus")).address
  );

  if (auctionHouse) {
    console.log(auctionHouse);
    // Set auction house approval
    // await mintableCollection.setApprovalForAll(auctionHouse);
  }
};
module.exports.tags = ["HollyPlus"];
