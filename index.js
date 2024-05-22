// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please privde a short description",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "name"
    },
    {
        type: "input",
        message: "Add some credits, list your collaborators",
        name: "name"
    },
    {
        type: "list",
        message: "Choose a license",
        name: "name",
        choices: ["non-verbal", "verbal"]
    },
    {
        type: "input",
        message: "Add the features of your project",
        name: "name"
    },
    {
        type: "input",
        message: "How can other people contribute?",
        name: "name"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(`${fileName}.md`, generateMarkdown(data), (error) => {
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
