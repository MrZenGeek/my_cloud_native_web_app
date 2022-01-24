const fs = require("fs");

module.exports = (plop) => {
  plop.setActionType(
    "printPkgJsonDeployNote",
    (answers) =>
      `Remember to add '"deploy:${answers.serviceName}": "lerna run deploy --stream --scope=\\"${answers.serviceName}\\"",' to the root package.json for simplicity.`
  );

  return {
    description: "Generate a new service.",
    prompts: [
      {
        type: "list",
        name: "serviceType",
        message: "Please choose a service",
        choices: fs.readdirSync("./templates/services").map(serviceFolderName => ({
          name: serviceFolderName.split("-").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" "),
          value: serviceFolderName,
        })),
      },
      {
        type: "input",
        name: "serviceName",
        message: "What's the new service name? (e.g. my-new-service)",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "../services/{{serviceName}}",
        base: "../templates/services/{{serviceType}}",
        templateFiles: "../templates/services/{{serviceType}}",
      },
      {
        type: "printPkgJsonDeployNote",
      },
    ],
  };
};
