const global = require('./global');
const _ = require('lodash');

function toWei() {
    const web3 = global.getWeb3();
    if(_.isFunction(web3.toWei)) {
        return web3.toWei.apply(undefined, arguments);
    }
    else {
        return web3.utils.toWei.apply(undefined, arguments);
    }
}

module.exports = {
    toWei
};
