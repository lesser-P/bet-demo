const { ethers } = require('hardhat')
const fs = require('fs')
require('dotenv').config('')

async function main() {
  const factory = await ethers.getContractFactory('Bets')
  const contract = await factory.deploy()
  await contract.waitForDeployment()
  console.log('partybet:', contract.target)
  fs.appendFileSync('./config.js', `const bets=${contract.target}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(-1)
  })
