const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(('./utils/generateMarkdown.js'));

// validator to ensure that all fields have inputs
const validator = (input) => {
    if(input.length===0){  
        return 'Please provide an input';
    }
    else{
    return true;
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "project",
        validate: validator
    },
    {
        type: "input",
        message: "What is the repo name of this project?",
        name: "repo",
        validate: validator
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        validate: validator
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: validator
    },
    {
        type: "input",
        message: "Please write a description about the project",
        name: "description",
        validate: validator
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "GPLv3",
            "Apache"
        ],
        validate: validator
    },
    {
        type: "input",
        message: "What command should be used to install dependencies?",
        name: "dependencies",
        validate: validator
    },
    {
        type: "input",
        message: "What command should the user use to run tests?",
        name: "test",
        validate: validator
    }, 
    {
        type: "input",
        message: "How should the user use the repo?",
        name: "usage",
        validate: validator
    },
    {
        type: "input",
        message: "How can users contribute to the repo?",
        name: "contributions",
        validate: validator
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
        console.log("File created!");
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(
        (data) => {
            writeToFile("README.MD",generateMarkdown(data))
        }
    )

}

// Function call to initialize app
init();