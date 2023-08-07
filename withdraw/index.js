const { ethers } = require("ethers");
const { AlchemyProvider } = require("@ethersproject/providers");
const fs = require("fs");
require("dotenv").config(); // Load environment variables from .env file

const CONTRACT_ABI_PATH = "./BlindBackrun.json"; // Path to the ABI file
const network = "goerli"
async function main() {
  try {
    // Create Alchemy provider
    const provider = new AlchemyProvider(network , process.env.ALCHEMY_API_KEY ); 

    // Create a signer
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // Get the contract owner's address
    const ownerAddress = await wallet.getAddress();

    // Read the contract ABI from the file
    const abiJSON = fs.readFileSync(CONTRACT_ABI_PATH, "utf-8");
    const contractABI = JSON.parse(abiJSON);

    // Connect to the contract
    const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractABI, wallet);

    // Call the function
    const transaction = await contract.withdrawWETHToOwner();
    await transaction.wait();

    console.log("Withdrawal successful.");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
