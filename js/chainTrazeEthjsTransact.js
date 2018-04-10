const Eth = require('ethjs-query');
const EthContract = require('ethjs-contract');
const web3 = require('./connect');

const chainTrazeContractInfo = require('./chainTrazeContractInfo');

async function callWithEthjs() {
    const eth = new Eth(web3.currentProvider);

    eth.accounts().then((accounts) => {
        console.log(accounts);

        const contract = new EthContract(eth);

        const ChainTraze = contract(chainTrazeContractInfo.abi);
        const chainTraze = ChainTraze.at(chainTrazeContractInfo.address);

    });
}

callWithEthjs();
