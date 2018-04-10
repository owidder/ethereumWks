const ethers = require('ethers');
const Web3 = require('web3');
const web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
const provider = new ethers.providers.Web3Provider(web3Provider);

const chainTrazeContractInfo = require('./chainTrazeContractInfo');

const chainTrazeInterface = new ethers.Interface(chainTrazeContractInfo.abi);
console.log(chainTrazeInterface);

async function callWithEthers() {
    const accounts = await provider.listAccounts();
    console.log(accounts);

    const contract = new ethers.Contract(chainTrazeContractInfo.address, chainTrazeContractInfo.abi, provider);

    provider.on(chainTrazeInterface.events.Position2.topics, function (log) {
        const data = chainTrazeInterface.events.Position2.parse(log.data);
        console.log(data);
    });

    provider.on(chainTrazeInterface.events.Position.topics, function (log) {
        const data = chainTrazeInterface.events.Position.parse(log.data);
        console.log(data);
    });

    provider.on(chainTrazeInterface.events.Error.topics, function (log) {
        const data = chainTrazeInterface.events.Error.parse(log.data);
        console.log(data);
    });
}

callWithEthers();
