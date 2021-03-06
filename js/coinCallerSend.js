const contract = require('truffle-contract');

const coinCallerArtifacts = require('../build/contracts/CoinCaller.json');
const CoinCaller = contract(coinCallerArtifacts);

const metaCoinArtifacts = require('../build/contracts/MetaCoin.json');
const MetaCoin = contract(metaCoinArtifacts);

const web3 = require('./connect');

const accounts = require('./accounts');
const global = require('./global');

global.setWeb3(web3);

CoinCaller.setProvider(web3.currentProvider);
MetaCoin.setProvider(web3.currentProvider);

const dirtyHack = require('./dirtyHack');
dirtyHack(MetaCoin);

async function sendCoins() {
    try {
        const coinCallerInstance = await CoinCaller.deployed();
        const metaCoinInstance = await MetaCoin.deployed();

        const _accounts = await accounts.get();

        console.log(_accounts);
        console.log(metaCoinInstance.address);
        console.log(coinCallerInstance.address);

/*
        const log_receiver = metaCoinInstance.log_receiver();
        log_receiver.watch(function (err, res) {
            console.log("> ------ log_receiver ------");
            console.log(err);
            console.log(res);
            console.log("< ------ log_receiver ------");
        });
*/

        // const sendCoinResult = await coinCallerInstance.sendCoin(metaCoinInstance.address, _accounts[1], 10, {from: _accounts[0]});
        // console.log(sendCoinResult);

        const delegateTestResult = await coinCallerInstance.delegateTest(metaCoinInstance.address, {from: _accounts[0]});
        console.log(delegateTestResult);

        const log_text = metaCoinInstance.log_text();
        log_text.get(function (err, res) {
            console.log("> ------ log_text ------");
            console.log(err);
            console.log(res);
            console.log("< ------ log_text ------");
        });

        const balanceFrom = await metaCoinInstance.getBalance.call(_accounts[0], {from: _accounts[0]});
        console.log(balanceFrom.toNumber());

        const balanceTo = await metaCoinInstance.getBalance.call(_accounts[1], {from: _accounts[0]});
        console.log(balanceTo.toNumber());

        const balanceCoinCaller = await metaCoinInstance.getBalance.call(coinCallerInstance.address, {from: _accounts[0]});
        console.log(balanceCoinCaller.toNumber());

    } catch (e) {
        console.error(e);
    }
}

sendCoins();