const { ethers, run } = require('hardhat')

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
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
