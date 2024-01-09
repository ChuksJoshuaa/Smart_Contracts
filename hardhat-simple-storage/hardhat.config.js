require('@nomiclabs/hardhat-waffle')
require('hardhat-gas-reporter')
require('./utils/blockNumber')
// require("@nomiclabs/hardhat-etherscan")
require('dotenv').config()
require('solidity-coverage')
require('@nomicfoundation/hardhat-verify')
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {},
        sepolia: {
            url: process.env.SEPOLIA_URL,
            accounts: [process.env.SEPOLIA_PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: process.env.LOCAL_URL,
            chainId: 1337,
        },
    },
    solidity: '0.8.8',
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: 'USD',
        outputFile: 'gas-report.txt',
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
