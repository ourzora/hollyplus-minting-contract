module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("MintableArtistCollection", {
    from: deployer,
    args: ["HollyPlus+", "HOLLYPLUS"],
    log: true,
  });
};
module.exports.tags = ["MintableArtistCollection"];
