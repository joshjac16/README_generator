const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Enter a description of your project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "Explain to users how to install your program",
  },
  {
    type: "input",
    name: "Usage",
    message: "Explain how your program can be used",
  },
  {
    type: "input",
    name: "Usage",
    message: "Explain how your program can be used",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache 2.0",
      "Boost Software 1.0",
      "MIT",
      "Mozilla",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can users contribute to your project.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please enter any testing instructions you would like to provide for this project.",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("./example/README.md", data);
  });
}

// Function call to initialize app
init();
