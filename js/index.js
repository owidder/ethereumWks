const send = require('./send');
const accounts = require('./accounts');
const web3 = require('./connect');
const global = require('./global');

global.setWeb3(web3);

async function start() {
    let accountFrom;
    let accountTo;

    const _accounts = await accounts.get(web3);
    console.log(_accounts);

    if(process.argv.length > 2 && process.argv[2].startsWith("0x")) {
        accountFrom = process.argv[2];
    }
    else {
        accountFrom = _accounts[0];
    }

    if(process.argv.length > 3 && process.argv[3].startsWith("0x")) {
        accountTo = process.argv[3];
    }
    else {
        accountTo = _accounts[1];
    }

    send(accountFrom, accountTo, 1);
}


start();

