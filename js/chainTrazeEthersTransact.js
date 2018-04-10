const ethers = require('ethers');
const Web3 = require('web3');
const web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
const provider = new ethers.providers.Web3Provider(web3Provider);

const privateKey = "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";
const wallet = new ethers.Wallet(privateKey, provider);

const chainTrazeContractInfo = require('./chainTrazeContractInfo');

const chainTrazeInterface = new ethers.Interface(chainTrazeContractInfo.abi);
console.log(chainTrazeInterface);

async function callWithEthers() {
    const accounts = await provider.listAccounts();
    console.log(accounts);

    const contract = new ethers.Contract(chainTrazeContractInfo.address, chainTrazeContractInfo.abi, wallet);
    contract.register("_991", 122, 233).then((transaction) => {
        console.log(transaction);
    });
}

callWithEthers();
