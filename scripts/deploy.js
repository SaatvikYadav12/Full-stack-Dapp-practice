const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of the smart contract

  await chai.deployed(); //deploying the smart contract

  console.log("Deployed contract address:", `${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xF339b8a563A0b233B8fAc5FFc8026Ae991C841fe
