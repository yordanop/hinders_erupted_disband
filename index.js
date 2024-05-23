// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readMeCreator = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a short description",
        name: "description"
    },
    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["MIT", "GNU GPL v3", "GNU AGPL v3", "Mozilla Public License 2.0", "No license"]
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage"
    },
    {
        type: "input",
        message: "Add some credits, list your collaborators",
        name: "credits"
    },
    {
        type: "input",
        message: "Add the features of your project",
        name: "features"
    },
    {
        type: "input",
        message: "How can other people can contribute?",
        name: "contribute"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(`${data.title.replace(/\s+/g, '_')}_${fileName}.md`, readMeCreator.generateMarkdown(data), (error) => {
          if (error) {
            console.log(error);
          }
        });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README', answers)
      });
}

// Function call to initialize app
init();
