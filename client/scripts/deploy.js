const hre = require("hardhat");

async function main() {
  const verifierContract ="BlextickPassv1"
  const verifierName = "Blextickv1";
  const verifierSymbol = "BLEXv1"; 
  const ERC20Verifier = await hre.ethers.getContractFactory(verifierContract);
  const erc20Verifier = await ERC20Verifier.deploy(
    verifierName,
    verifierSymbol
  );

  await erc20Verifier.deployed();
  console.log(verifierName, " deployed to:", erc20Verifier.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
