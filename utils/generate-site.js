/** Required Libaries
 **************************************************************************************************/
const fs = require("fs");

/** Function Definitions
 **************************************************************************************************/
const writeFile = (fileContent) => {
  // resolve - if the promise is fullfilled
  // reject - if promise is not fullfilled
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      //if there is an error, reject the Promise and send the error to the promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure hte Promise doesn't acceidentally execute the resolve() function as well
        return;
      }

      // if it went well , resove the Promise and send the successfull data to the `then()` method
      resolve({
        ok: true,
        message: "File Created",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      // if there is an error, reject the promise and send the error to the promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the funciton here
        return;
      }

      //if it passed, resolve the Promise and send the successfully data
      resolve({
        ok: true,
        message: "File copied",
      });
    });
  });
};

// demo HTML code
// const sampleHtml = "<h1>This will be written to the file!</h1>";

// writeFile(sampleHtml)
//   .then((successfulResponse) => {
//     // this will run when we use `resolve()`
//     console.log(successfulResponse);
//   })
//   .catch((errorResponse) => {
//     // this will run when we use `reject()`
//     console.log(errorResponse);
//   });

/** Export
 **************************************************************************************************/
// exporting 2 functions (writeFile(), copyFIle()) as methods (writeFile, copyFile)
// module.exports = {
//   writeFile: writeFile,
//   copyFile: copyFile,
// };

//ES5 simplification - (shorthand property names, same name as value that is associated with it)
module.exports = {
  writeFile,
  copyFile,
};
