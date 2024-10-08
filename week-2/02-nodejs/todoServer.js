/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
 let todos=[];
// GET all todos
app.get('/todos', (req, res) => {
  // Return the list of todos with a 200 OK status
  res.status(200).json(todos);
});

// GET a specific todo by ID
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  // Find the todo with the matching ID
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    // If found, return the todo with a 200 OK status
    res.status(200).json(todo);
  } else {
    // If not found, return a 404 Not Found status with an error message
    res.status(404).send('Todo not found');
  }
});

// POST a new todo
app.post('/todos', (req, res) => {
  // Generate a random ID for the new todo
  const id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const title = req.body.title;
  const completed = req.body.completed;
  // Create a new todo object
  const newTodo = {
    id: id.toString(), // Convert ID to a string for consistency
    title: title,
    completed: completed
  };
  // Add the new todo to the list
  todos.push(newTodo);
  // Return the newly created todo with a 201 Created status
  res.status(201).json(newTodo);
});

// PUT to update an existing todo by ID
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  // Find the todo with the matching ID
  const todo = todos.find((todo) => todo.id == id);
  if (todo) {
    const title = req.body.title;
    const completed = req.body.completed;
    // Update the todo's title and completed status if new values are provided
    todo.title = title !== undefined ? title : todo.title;
    todo.completed = completed !== undefined ? completed : todo.completed;
    // Return the updated todo with a 200 OK status
    res.status(200).json(todo);
  } else {
    // If not found, return a 404 Not Found status with an error message
    res.status(404).send('Todo not found');
  }
});

// DELETE a todo by ID
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  // Find the index of the todo with the matching ID
  const todoIndex = todos.findIndex((todo) => todo.id == id);
  if (todoIndex !== -1) {
    // If found, remove the todo from the list
    todos.splice(todoIndex, 1);
    // Return a 200 OK status with a success message
    res.status(200).send('Todo deleted successfully');
  } else {
    // If not found, return a 404 Not Found status with an error message
    res.status(404).send('Todo not found');
  }
});

  
  app.use(bodyParser.json());
  app.listen(3000);
  
  module.exports = app;