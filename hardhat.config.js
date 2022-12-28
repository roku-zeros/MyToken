/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-chai-matchers')
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
};

const GOERLI_PRIVATE_KEY = "c586a93f1e0ee44a86bb4b1b728ee05a49537f554371ec6a85706bbfc326f6fc";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/0e1e07c8ff35457f9227bc0759436abf`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
