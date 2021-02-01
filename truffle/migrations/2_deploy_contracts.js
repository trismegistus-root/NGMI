const ngmi = artifacts.require("ngmi");

module.exports = function(deployer) {
  deployer.deploy(ngmi, "PinkWojaks", "ngmi");
};