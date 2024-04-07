const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Define questions and answers
const questions = [
    {
        question: "What is Node.js?",
        options: ["A JavaScript runtime built on Chrome's V8 JavaScript engine.", "A server-side scripting language.", "A front-end framework.", "A database management system."],
        answer: "A JavaScript runtime built on Chrome's V8 JavaScript engine."
    },
    {
        question: "What is npm?",
        options: ["Node Package Manager", "Node Project Manager", "Node Program Manager", "Node Process Manager"],
        answer: "Node Package Manager"
    },
    {
        question: "Which keyword is used to import modules in Node.js?",
        options: ["require", "import", "include", "use"],
        answer: "require"
    },
    {
        question: "What module is used to create a web server in Node.js?",
        options: ["http", "url", "fs", "querystring"],
        answer: "http"
    },
    {
        question: "Which method is used to read user input in Node.js?",
        options: ["prompt()", "readline()", "console.log()", "input()"],
        answer: "readline()"
    },
    {
        question: "What does the 'fs' module in Node.js stand for?",
        options: ["File System", "Function System", "Framework System", "Fast System"],
        answer: "File System"
    },
    {
        question: "Which symbol is used for asynchronous code in Node.js?",
        options: ["&", "*", "$", "%"],
        answer: "$"
    },
    {
        question: "What is the default port number for Node.js applications?",
        options: ["8080", "3000", "80", "5000"],
        answer: "3000"
    },
    {
        question: "What is the purpose of package.json file in a Node.js project?",
        options: ["To manage project dependencies and scripts", "To write documentation for the project", "To configure database settings", "To define project stylesheets"],
        answer: "To manage project dependencies and scripts"
    },
    {
        question: "Which of the following is NOT a core module in Node.js?",
        options: ["http", "fs", "path", "jquery"],
        answer: "jquery"
    }
];

let score = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint to get the questions
app.get('/questions', (req, res) => {
    res.json(questions);
});

// Endpoint to submit answers and calculate score
app.post('/submit', (req, res) => {
    const answers = req.body;
    score = 0;
    questions.forEach((question, index) => {
        if (answers[index] === question.answer) {
            score++;
        }
    });
    res.json({ score: score });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
