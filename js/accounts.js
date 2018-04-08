const _ = require('lodash');

const global = require('./global');

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

function checkAccounts(accounts) {
    return !_.isUndefined(accounts[0]);
}

function _getAccounts2(web3, resolve, reject) {
    web3.eth.getAccounts(function (accounts) {
        if(checkAccounts(accounts)) {
            resolve(accounts);
        }
        else {
            reject();
        }
    })
}

function _getAccounts1(web3, resolve, reject) {
    try {
        web3.eth.getAccounts().then((accounts) => {
            if (checkAccounts(accounts)) {
                resolve(accounts);
            }
            else {
                _getAccounts2(web3, resolve, reject);
            }
        }, (e) => {
            console.log(e);
            _getAccounts2(web3, resolve, reject);
        })
    } catch(e) {
        console.log(e);
        _getAccounts2(web3, resolve, reject);
    }
}

function _getAccounts(web3) {
    return new Promise((resolve, reject) => {
        _getAccounts1(web3, resolve, reject);
    });
}

async function get(web3) {
    if(_.isUndefined(web3)) {
        web3 = global.getWeb3();
    }
    const _try1 = await _accounts(web3);
    if(!_.isUndefined(_try1)) {
        return _try1
    }
    else {
        const _try2 = await _getAccounts(web3);
        return _try2;
    }
}

async function getFromTo() {
    const web3 = global.getWeb3();
    let from;
    let to;

    const _accounts = await get(web3);

    if(process.argv.length > 2 && process.argv[2].startsWith("0x")) {
        from = process.argv[2];
    }
    else {
        from = _accounts[0];
    }

    if(process.argv.length > 3 && process.argv[3].startsWith("0x")) {
        to = process.argv[3];
    }
    else {
        to = _accounts[1];
    }

    return {from, to}
}

module.exports = {
    get, getFromTo
};
