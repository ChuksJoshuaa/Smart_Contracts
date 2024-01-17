const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructor: args,
        })
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified"))
            console.log("Already verified")
        else console.log(error)
    }
}

module.exports = verify
