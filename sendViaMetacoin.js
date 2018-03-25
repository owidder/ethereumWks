const artifacts = require('./build/contracts/MetaCoin.json')
const contract = require('truffle-contract')
const MetaCoin = contract(artifacts);
MetaCoin.setProvider(web3.currentProvider);

var account_one = "0x627306090abab3a6e1400e9345bc60c78a8bef57"; // an address
var account_two = "0xf17f52151ebef6c7334fad080c5704d77216b732"; // another address

MetaCoin.deployed().then(function(instance) {
  return instance.sendCoin(account_two, 10, {from: account_one});
}).then(function(result) {
  // If this callback is called, the transaction was successfully processed.
  alert("Transaction successful!")
}).catch(function(e) {
  // There was an error! Handle it.
})
