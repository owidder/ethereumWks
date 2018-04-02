const contract = require('truffle-contract');

const justForTestingArtifacts = require('../build/contracts/JustForTesting.json');
const JustForTesting = contract(justForTestingArtifacts);

const justForTestingCallerArtifacts = require('../build/contracts/JustForTestingCaller.json');
const JustForTestingCaller = contract(justForTestingCallerArtifacts);

const web3 = require('./connect');

const accounts = require('./accounts');
const global = require('./global');
global.setWeb3(web3);

JustForTesting.setProvider(web3.currentProvider);
JustForTestingCaller.setProvider(web3.currentProvider);

const dirtyHack = require('./dirtyHack');
dirtyHack(JustForTesting);

async function call() {
    try {
        const justForTestingInstance = await JustForTesting.deployed();
        const justForTestingCallerInstance = await JustForTestingCaller.deployed();

        const _accounts = await accounts.get();

        let result;
        if(process.argv[2] == 'direct') {
            result = await justForTestingCallerInstance.directCall(justForTestingInstance.address, {from: _accounts[0]});
        }
        else {
            result = await justForTestingCallerInstance.delegateCall(justForTestingInstance.address, {from: _accounts[0]});
        }
        console.log(result);

        const log_text = justForTestingInstance.log_text();
        log_text.get(function (err, res) {
            console.log("> ------ log_text ------");
            console.log(err);
            console.log(res);
            console.log("< ------ log_text ------");
        });

    } catch (e) {
        console.error(e);
    }
}

call();