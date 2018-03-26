const artifacts = require('../build/contracts/MetaCoin.json');
const contract = require('truffle-contract');
const MetaCoin = contract(artifacts);

const web3 = require('./connect');

const accounts = require('./accounts');
const global = require('./global');

global.setWeb3(web3);

MetaCoin.setProvider(web3.currentProvider);

const dirtyHack = require('./dirtyHack');
dirtyHack(MetaCoin);

async function sendCoins() {
    try {
        const instance = await MetaCoin.deployed();
        const {from, to} = await accounts.getFromTo();
        console.log(from);
        console.log(to);
        const result = await instance.sendCoin(to, 1, {from});
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

sendCoins(1);
