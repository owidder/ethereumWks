const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.getBlockNumber().then(function (result) {
   console.log(result);
});

web3.eth.getAccounts().then(function (result) {
    console.log(result);
})