const {
  FlashbotsBundleProvider,
} = require("@flashbots/ethers-provider-bundle");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const fakeNFT = await ethers.getContractFactory("FakeNFt");
  const FakeNFT = await fakeNFT.deploy();
  await FakeNFT.deployed();
  console.log("Address of Fake Nft Contract: ", FakeNFT.address);

  const provider = new ethers.providers.WebSocketProvider(
    process.env.ALCHEMY_WEBSOCKET_URL,
    "goerli"
  );
}
