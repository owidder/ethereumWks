const send = require('./send');
const accounts = require('./accounts');
const web3 = require('./connect');
const global = require('./global');

global.setWeb3(web3);

async function start() {
    const {from, to} = await accounts.getFromTo();

    send(from, to, 1);
}


start();

