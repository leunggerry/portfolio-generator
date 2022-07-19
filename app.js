/** Modules
 **************************************************************************************************/
const fs = require("fs");
const generatePage = require("./src/page-template.js");
/** Global Constants
 **************************************************************************************************/
// const profileDataArgs = process.argv.slice(2, process.argv.length);
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

/** Functions
 **************************************************************************************************/
// const printProfileData = (profileDataArr) => {
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

/** Main Program
 **************************************************************************************************/
fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Check out index.html to see output");
});
