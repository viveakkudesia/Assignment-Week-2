## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
const fs = require("fs");

// Read the file
fs.readFile('a.txt', 'utf-8', function(err, data) {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Process the data
  let string = data.replace(/ /g, '');

  // Write the processed data to a new file
  fs.writeFile('a.txt', string, function(err) {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
    console.log("Spaces removed and file saved.");
  });
});
