// import dotenv from "dotenv";

// dotenv.config();

// const MYSQL_HOST = process.env.MYSQL_HOST || "127.0.0.1";
// const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "rootpractice";
// const MYSQL_USER = process.env.MYSQL_HOST || "practice20020210";
// const MYSQL_PASS = process.env.MYSQL_HOST || "classicmodels";

// const MYSQL = {
//   host: MYSQL_HOST,
//   database: MYSQL_DATABASE,
//   user: MYSQL_USER,
//   pass: MYSQL_PASS,
// };

// const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
// const SERVER_PORT = process.env.SERVER_PORT || 1337;

// const SERVER = {
//   hostname: SERVER_HOSTNAME,
//   port: SERVER_PORT,
// };

// const config = {
//   mysql: MYSQL,
//   server: SERVER,
// };

// export default config;

const http = require("http");
const mysql = require("mysql");
// Use these variables to define our port, Hostname
// const hostname = "127.0.0.1";
const port = 3010;
const express = require("express");
const cors = require("cors");

// const path = require("path");

// const bodyParser = require("body-parser");

// import express from "express";
// import mysql from "mysql";

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "rootpractice",
  password: "practice20020210",
  database: "classicmodels",
});

// This connects to the database
// if there is an arror it will catch it
//error is and can troubleshoot it
db.connect((err: any) => {
  if (err) {
    console.log(`can't connect to database`);
    return;
  }
  console.log(`connection worked`);
});

app.listen(3010, () => {
  console.log("Connected to backend!");
});

app.get("/", (_req: any, res: { json: (arg0: string) => void }) => {
  res.json("Welcome to Classic Models Backend");
});

// Example of how we can implement CRUD with database
app.get("/customers", (_req: any, res: { send: (arg0: any) => void }) => {
  const ss = "SELECT * FROM customers";
  db.query(ss, (err: any, data: any) => {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});

// Selecting only the phone numbers
app.get("/customers", (_req: any, res: { send: (arg0: any) => void }) => {
  const ss = "SELECT phone from customers";
  db.query(ss, (err: any, data: any) => {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});
