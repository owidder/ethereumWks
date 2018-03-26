const global = require('./global');
const web3Util = require('./web3Util');

async function send(from, to, numOfEther) {
    const result = await global.getWeb3().eth.sendTransaction({
        from: from,
        to: to,
        value: web3Util.toWei(String(numOfEther), "ether")
    });
    console.log(result);
}

module.exports = send;
