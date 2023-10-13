// imports
const { ethers } = require("hardhat");

// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contracts...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  console.log(simpleStorage, "simple storage");
}

// main
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
