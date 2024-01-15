const { hre, network } = require("hardhat")

const { networkConfig } = require("../helper-hardhat-config")

const deployFunc = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [], // put price feed address
        log: true,
    })
}

module.exports.default = deployFunc
