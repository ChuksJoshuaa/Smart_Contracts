const { ethers, run, network } = require('hardhat')

// const ChainId = 1337
const ChainId = 11155111

const verify = async (contractAddress, args) => {
    console.log('Verying contract...')
    try {
        await run('verify:verify', {
            address: contractAddress,
            constructor: args,
        })
    } catch (error) {
        if (error.message.toLowerCase().includes('already verified'))
            console.log('Already verified')
        else console.log(error)
    }
}

const main = async () => {
    const SimpleStorageFactory = await ethers.getContractFactory(
        'SimpleStorage'
    )

    console.log('Deploying contract...')
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()

    console.log('Deployed contract to: ' + simpleStorage.address)

    if (network.config.chainId === ChainId && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6)
        await verify(simpleStorage.address, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log('Current value is: ' + currentValue)

    //Update the current value
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log('Updated value is: ' + updatedValue)
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
