var ngmi = artifacts.require("ngmi");

module.exports = function(deployer) {
  // deployment steps
  
  deployer.deploy(ngmi, "PinkWojak", "NGMI");
};
