const web3 = require('./connect');

async function getAccounts(fromIndex, toIndex) {
    const accounts = await web3.eth.accounts;
    return {
        from: accounts[fromIndex],
        to: accounts[toIndex]
    }
}

async function send(fromIndex, toIndex, numOfEther) {
    const accounts = await getAccounts(fromIndex, toIndex);
    const result = await web3.eth.sendTransaction({
        from: accounts.from,
        to: accounts.to,
        value: web3.toWei(String(numOfEther), "ether")
    });
    console.log(result);
}

module.exports = send;
