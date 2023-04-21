// Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown.js");
const path = require("path");

//  Create a function to write README file
const questions =([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project, include your motivation, why you built it, what problem it solves, and what you learned.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Describe each step to get it running",
  },
  {
    type: "input",
    name: "usage",
    message: "Give instructions on how to use your application, you can add screenshots later",
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "list",
    name: "license",
    message: "What license did you use?",
    choices: ['MIT', 'GPL', 'Apache', 'GNU'],
  },
  {
    type: "input",
    name: "git",
    message: "Please provide a link to your github account.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide a link to your email account.",
  },
]);

//  Create a function to initialize app
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Your ReadMe has been created!");
    writeToFile("./util/README.md", generateMarkdown({ ...answers }));
  });
}

init();
