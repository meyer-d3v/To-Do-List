const express = require('express');
const { exit } = require('process');
const { request } = require('http');
const serverless = require('serverless-http');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());

//Variables
let result = [];
let resultID = [];

// Routes
app.get('/', (req, res) => {
    res.send('This api works!');
});

app.post('/todos/:itemString', (req, res) => {

    const item = req.params.itemString;

    if (item === "") {
        res.status(401).send("The requast parameter is empty!!!");
        stop;
    }

    let resultLastID = resultID.length;

    result.push(item);
    resultID.push(resultLastID + 1); 

    res.status(201).send("Your data has been saved successfully");

})

app.get('/todos/getToDo/:id', (req, res) => {

    let todoID = req.params.id;

    console.log(todoID.typeof);
    
    if (todoID === "") {
        res.status(401).send("The requast parameter is empty!!!");
        stop;
    }

    

    res.status(200).json({
        id: todoID,
        item: result[todoID + 1]
    });



})

app.delete('/todos/delete/:id' , (req, res) => {

    const todoID = req.params.id;

    for (let i = 0; i < result.length + 1; i++) {
        if (result[i + 1] = todoID) {
            result[i + 1].slice(0, i+1);
        }
    }

    res.status(200).send("To-Do item successfully deleted.");




})


app.get('/todos', (req, res) => {
    
    res.status(200).send(resultID + ": " + result);

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports.handler = serverless(app);