//Dependencies
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

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
    password: "Kl23j4h9fk`",
    database: "employee_management_db",
  },
  console.log(`Connected to the emplopyee_management_db database.`)
);
