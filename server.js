//Dependencies
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

//create PORT variable and instantiate express
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_management_db",
  },
  console.log(`Connected to the employee_management_db database.`)
);

function mainPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do? ",
        name: "choice",
        choices: [
          "View departments",
          "View roles",
          "View employees",
          "Add department",
          "Add role",
          "Add employee",
          "Update an employee role",
        ],
      },
    ])
    .then(async function ({ choice }) {
      switch (choice) {
        case "View departments":
          db.query(
            "SELECT id, name AS Department FROM departments;",
            function (err, results) {
              console.table(results); // results contains rows returned by server
            }
          );
          await cleanUp();
          mainPrompt();
          break;
        case "View roles":
          db.query(
            "SELECT title, salary FROM roles;",
            function (err, results) {
              console.table(results); // results contains rows returned by server
            }
          );
          await cleanUp();
          mainPrompt();
          break;
        case "View employees":
          db.query(
            "SELECT first_name, last_name, title, salary FROM employees JOIN roles ON employees.role_id = roles.id;",
            function (err, results) {
              console.table(results); // results contains rows returned by server
            }
          );
          await cleanUp();
          mainPrompt();
          break;
        case "Add department":
          db.query("SELECT * FROM employees", function (err, results) {
            console.table(results); // results contains rows returned by server
          });
          break;
        case "Add role":
          break;
        case "Add employee":
          db.query("SELECT * FROM employees", function (err, results) {
            console.table(results); // results contains rows returned by server
          });
          break;
        case "Update an employee role":
          db.query("SELECT * FROM employees", function (err, results) {
            console.table(results); // results contains rows returned by server
          });
          break;
      }
    });
}

function cleanUp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

//eventhandler to start the server.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mainPrompt();
