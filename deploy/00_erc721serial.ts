module.exports = async ({ getNamedAccounts, deployments, ethers }: any) => {
  const { deploy } = deployments;
  const { deployer, auctionHouse } = await getNamedAccounts();

  await deploy("MintableArtistCollection", {
    from: deployer,
    args: ["HollyPlus+", "HOLLYPLUS"],
    log: true,
  });

  const mintableCollection = ethers.getContractAt(
    "MintableArtistCollection",
    (await deployments.get("MintableArtistCollection")).address
  );

  if (auctionHouse) {
    // Set auction house approval
    await mintableCollection.setApprovalForAll(auctionHouse);
  }
};
module.exports.tags = ["MintableArtistCollection"];
