/** Modules
 **************************************************************************************************/
// const fs = require("fs");
const inquirer = require("inquirer");
// const generatePage = require("./src/page-template.js");
// /** Global Constants
//  **************************************************************************************************/
// const pageHTML = generatePage(name, github);

// /** Functions
//  **************************************************************************************************/

// /** Main Program
//  **************************************************************************************************/
// fs.writeFile("index.html", generatePage(name, github), (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see output");
// });
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter GitHub Username:",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some info about yourself: ",
    },
  ]);
};

const promptProject = (portfolioData) => {
  // check if there are any projects already in the array property
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  console.log(`
  =================
  Add a New Project
  =================`);

  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of your project?",
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description of the project (Required)",
        },
        {
          type: "checkbox",
          name: "languages",
          message: "What did you build this project with? (Check all that apply)",
          choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"],
        },
        {
          type: "input",
          name: "link",
          message: "Enter the GitHub link to your project. (Required)",
        },
        {
          type: "confirm",
          name: "feature",
          message: "Would you like to feature this project?",
          default: false,
        },
        {
          type: "confirm",
          name: "confirmAddProject",
          message: "Would you like to enter another project?",
          default: false,
        },
      ])
      // store the project data in the projects data attribute
      .then((projectData) => {
        portfolioData.projects.push(projectData);
        //check if user wants to add another project
        // if so call prompt project again
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      })
  );
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => console.log(portfolioData));
