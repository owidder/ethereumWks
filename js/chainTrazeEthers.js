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
    const result = await contract.getPositionContent(55, 66);
    console.log(result);

    provider.on(["0x5dfb2295f6c23ae130d55b1106b02184d4a217886880ae1d0f37123542574775"], function (log) {
        console.log(log);
        console.log(chainTrazeInterface.events.Position2.parse(log.data));
    })
}

callWithEthers();
