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

async function get(web3) {
    const _try1 = await _accounts(web3);
    if(!_.isUndefined(_try1)) {
        return _try1
    }
    else {
        const _try2 = await _getAccounts(web3);
        return _try2;
    }
}

module.exports = {
    get
};
