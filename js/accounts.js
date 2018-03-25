const _ = require('lodash');

async function _accounts(web3) {
    try {
        const accounts = await web3.eth.accounts;
        const firstAccount = accounts[0];
        if (!_.isUndefined(firstAccount)) {
            return accounts;
        }
    } catch (e) {
        console.log(e);
    }

    return undefined;
}

async function _getAccounts(web3) {
    try {
        const accounts = await web3.eth.getAccounts();
        const firstAccount = accounts[0];
        if (!_.isUndefined(firstAccount)) {
            return accounts;
        }
    } catch (e) {
        console.log(e);
    }

    return undefined;
}

async function getAccounts(web3) {
    const acc1 = await _accounts(web3);
    if(!_.isUndefined(acc1)) {
        return acc1
    }
    else {
        const acc2 = await _getAccounts(web3);
        return acc2;
    }
}

module.exports = getAccounts;
