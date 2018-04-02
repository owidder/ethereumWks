var JustForTesting = artifacts.require("./JustForTesting.sol");
var JustForTestingCaller = artifacts.require("./JustForTestingCaller.sol");

module.exports = function(deployer) {
  deployer.deploy(JustForTesting);
  deployer.deploy(JustForTestingCaller);
};
