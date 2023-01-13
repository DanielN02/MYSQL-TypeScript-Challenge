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
var http = require("http");
var mysql = require("mysql");
// Use these variables to define our port, Hostname
// const hostname = "127.0.0.1";
var port = 3010;
var express = require("express");
var cors = require("cors");
// const path = require("path");
// const bodyParser = require("body-parser");
// import express from "express";
// import mysql from "mysql";
var app = express();
app.use(express.json());
var db = mysql.createConnection({
  host: "127.0.0.1",
  user: "rootpractice",
  password: "practice20020210",
  database: "classicmodels",
});
// This connects to the database
// if there is an arror it will catch it
//error is and can troubleshoot it
db.connect(function (err) {
  if (err) {
    console.log("can't connect to database");
    return;
  }
  console.log("connection worked");
});
app.listen(3010, function () {
  console.log("Connected to backend!");
});
app.get("/", function (_req, res) {
  res.json("Welcome to Classic Models Backend");
});
app.get("/customers", function (_req, res) {
  var ss = "SELECT * FROM customers";
  db.query(ss, function (err, data) {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});

app.get("/customers", function (_req, res) {
  var ss = "SELECT phone from customers";
  db.query(ss, function (err, data) {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});
