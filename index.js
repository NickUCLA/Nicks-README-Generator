const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide guidelines for contributing to the project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instructions for testing the project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  // Use the fs.writeFile method to write the content to a file
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README file generated successfully!");
    }
  });
}

// Function to initialize app
function init() {
  // Prompt the user for input using Inquirer
  inquirer.prompt(questions).then((userInput) => {
    // Call the generateMarkdown function and pass in the user's input
    const markdownContent = generateMarkdown(userInput);

    // Provide the filename and markdown content to the writeToFile function
    writeToFile("README.md", markdownContent);
  });
}

// Function call to initialize app
init();
