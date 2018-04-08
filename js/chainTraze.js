const contract = require('truffle-contract');

const chainTrazeArtifacts = require('../build/contracts/ChainTraze.json');
const ChainTraze = contract(chainTrazeArtifacts);

const web3 = require('./connect');

const accounts = require('./accounts');
const global = require('./global');
global.setWeb3(web3);

ChainTraze.setProvider(web3.currentProvider);

const dirtyHack = require('./dirtyHack');
dirtyHack(ChainTraze);

async function call() {
    try {
        const chainTrazeInstance = await ChainTraze.deployed();
        console.log(chainTrazeInstance.address);

        const _accounts = await accounts.get();
        console.log(_accounts);

        const result = await chainTrazeInstance.register("wp10", {from: _accounts[0]});
        console.log(result);

        const position = chainTrazeInstance.Position();
        position.watch(function (err, res) {
            console.log("> ------ Position ------");
            console.log(err);
            console.log(res);
            console.log("< ------ Position ------");
        });

        const error = chainTrazeInstance.Error();
        error.watch(function (err, res) {
            console.log("> ------ Error ------");
            console.log(err);
            console.log(res);
            console.log("< ------ Error ------");
        });

    } catch (e) {
        console.error(e);
    }
}

call();