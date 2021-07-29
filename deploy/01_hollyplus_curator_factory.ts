module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy } = deployments;
  const { deployer, auctionHouse, weth } = await getNamedAccounts();

  const collectionAddress = await deployments.get("MintableArtistCollection")
    .address;

  await deploy("HollyPlusCuratorFactory", {
    from: deployer,
    args: [weth, auctionHouse, collectionAddress],
    log: true,
  });
};
module.exports.tags = ["HollyPlusCuratorFactory"];
module.exports.dependencies = ["MintableArtistCollection"];
