const { ethers } = require("hardhat")

async function enterRaffle() {
    const raffle = await ethers.getContract("Raffle")
    // const entranceFee = await raffle.getEntranceFee()
    // await raffle.enterRaffle({ value: entranceFee + 1 })
    const recentwinner = await raffle.getRecentWinner()
    // tx = await raffle.enterRaffle({ value: entranceFee + 1 })
    // await tx.wait(1)
    console.log(recentwinner)
    //console.log("Entered!")
}

enterRaffle()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
