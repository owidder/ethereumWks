const artifacts = require('../build/contracts/MetaCoin.json');
const contract = require('truffle-contract');
const MetaCoin = contract(artifacts);

const web3 = require('./connect');

MetaCoin.setProvider(web3.currentProvider);

const dirtyHack = require('./dirtyHack');
dirtyHack(MetaCoin);

async function sendCoins(toIndex) {
    try {
        const instance = await MetaCoin.deployed();
        const accounts = await web3.eth.accounts;
        const accountFrom = accounts[0];
        const accountTo = accounts[toIndex];
        console.log(accountFrom);
        console.log(accountTo);
        const result = await instance.sendCoin(accountTo, 1, {from: accountFrom});
        console.log(result);
        const balanceFrom = await instance.getBalance.call(accountFrom, {from: accountFrom});
        console.log(balanceFrom.toNumber());
        const balanceTo = await instance.getBalance.call(accountTo, {from: accountFrom});
        console.log(balanceTo.toNumber());
    } catch (e) {
        console.log(e);
    }
}

sendCoins(1);
