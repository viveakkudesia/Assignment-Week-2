// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs"); // Import the fs module
let writethis = "hefjnaskjdfasdkfj"; // Data to write to the file
fs.writeFile('a.txt', writethis, function(err) { // Write the data to 'a.txt'
  console.log("There is an error: " + err); // Log any errors that occur
});
