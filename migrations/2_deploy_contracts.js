const NGMI = artifacts.require("NGMI");

module.exports = function(deployer) {
  deployer.deploy(NGMI, "PinkWojaks", "NGMI");
};