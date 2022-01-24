const gitConfigHelper = require("plop-helper-git-config");
const serviceGenerator = require("./service");

module.exports = function (plop) {
  plop.setHelper("gitConfig", gitConfigHelper);
  plop.setGenerator("service", serviceGenerator(plop));
};
