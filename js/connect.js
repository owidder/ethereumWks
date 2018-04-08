const _ = require('lodash');

const Web3 = require('web3');

const processParamUrl = process.argv[2];
const url = _.isUndefined(processParamUrl) ? "http://localhost:7545" : processParamUrl;
const web3 = new Web3(new Web3.providers.HttpProvider(url));

module.exports = web3;
