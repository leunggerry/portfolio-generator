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
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
