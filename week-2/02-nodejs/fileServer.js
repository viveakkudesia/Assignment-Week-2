/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// Endpoint to list all files in the './files/' directory
app.get("/files", (req, res) => {
  // Define the path to the directory containing files
  const directoryPath = path.join(__dirname, './files/');
  
  // Read the directory contents
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      // If there's an error reading the directory, respond with a 500 status code
      return res.status(500).json({ error: 'Unable to scan directory' });
    }
    
    // Respond with the list of file names
    res.status(200).json(files);
  });
});

// Endpoint to get the content of a specific file
app.get("/file/:filename", (req, res) => {
  // Extract the filename from the request parameters
  const filename = req.params.filename;
  
  // Define the full path to the file
  const filePath = path.join(__dirname, './files/', filename);
  
  // Read the content of the file
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      // If there's an error reading the file, respond with a 404 status code
      return res.status(404).send("File not found");
    }
    
    // Respond with the content of the file
    res.status(200).send(data);
  });
});

// Handle any other routes with a 404 response
app.use((req, res) => {
  res.status(404).send('Not Found');
});
module.exports = app;