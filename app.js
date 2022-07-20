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
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter GitHub Username:",
      validate: (githubUsername) => {
        if (githubUsername) {
          return true;
        } else {
          console.log("Please enter your username");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAbout",
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true,
    },
    {
      type: "input",
      name: "about",
      message: "Provide some info about yourself: ",
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      },
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
          validate: (githubUsername) => {
            if (githubUsername) {
              return true;
            } else {
              console.log("Please enter your username");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description of the project (Required)",
          validate: (projectName) => {
            if (projectName) {
              return true;
            } else {
              console.log("Please enter your username");
              return false;
            }
          },
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
          validate: (githubLink) => {
            if (githubLink) {
              return true;
            } else {
              console.log("Please enter your GitHub link");
              return false;
            }
          },
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
