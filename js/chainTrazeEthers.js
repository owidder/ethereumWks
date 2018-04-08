const ethers = require('ethers');
const Web3 = require('web3');
const web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
const provider = new ethers.providers.Web3Provider(web3Provider);

const chainTrazeContractInfo = require('./chainTrazeContractInfo');

async function callWithEthers() {
    const accounts = await provider.listAccounts();
    console.log(accounts);

    const contract = new ethers.Contract(chainTrazeContractInfo.address, chainTrazeContractInfo.abi, provider);
}

callWithEthers();
