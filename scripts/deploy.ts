const { ethers, hre } = require("hardhat");

async function main() {

  const [owner, otherAccount] = await ethers.getSigners();

  // Get the ContractFactory for the TokenInu contract
  const battleshipGame = await ethers.getContractFactory("BattleShipGame");

  // Deploy the contract 
  const deployeBattleshipGame = await battleshipGame.deploy([owner.address, otherAccount.address]);
  console.log(`Deploying contract...`);

  // Wait for it to finish deploying
  await deployeBattleshipGame.deployed();

  // Print the address of the deployed contract
  console.log(`BattleShipGame was deployed at: ${deployeBattleshipGame.address}`);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
