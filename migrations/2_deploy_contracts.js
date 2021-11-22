const Punks = artifacts.require("PunkShiba");
module.exports = function(deployer) {
  deployer.deploy(Punks);
};
