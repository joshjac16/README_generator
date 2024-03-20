const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

function validateInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Please answer the question with some kind on input.";
  }
}
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: validateInput,
  },
  {
    type: "input",
    name: "Description",
    message: "Enter a description of your project.",
    validate: validateInput,
  },
  {
    type: "input",
    name: "Installation",
    message: "Explain to users how to install your program",
    validate: validateInput,
  },
  {
    type: "input",
    name: "Usage",
    message: "Explain how your program can be used",
    validate: validateInput,
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
    validate: validateInput,
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please enter any testing instructions you would like to provide for this project.",
    validate: validateInput,
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
    validate: validateInput,
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
    validate: (emailInput) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
        return true;
      } else {
        return "Not a valid email address. Please enter a valid email address.";
      }
    },
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
