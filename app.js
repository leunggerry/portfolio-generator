const profileDataArgs = process.argv.slice(2, process.argv.length);

/** Functions
 **************************************************************************************************/
const printProfileData = (profileDataArr) => {
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
