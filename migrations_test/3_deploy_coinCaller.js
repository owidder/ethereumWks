var CoinCaller = artifacts.require("./CoinCaller.sol");

module.exports = function(deployer) {
  deployer.deploy(CoinCaller);
};
