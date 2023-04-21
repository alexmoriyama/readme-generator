// Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")

//  Create a function to write README file
inquirer.prompt([
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
]);

//  Create a function to initialize app
function init(readMe) {
  const htmlPageContent = generateHTML(readMe);

  fs.writeFile(`./output/README.md`, generateMarkdown({...answers}), (err) => {
    if (err) {
      throw err;
    }
  }); console.log("Successfully created README.md")
  ;
}

