require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const {PRIVATE_KEY, PolygonScanKey} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: PolygonScanKey,
 }

};
