"use strict";

var Sequelize = require("sequelize");

require('dotenv').config();

var path = require("path");

var _process$env = process.env,
    DB_USER = _process$env.DB_USER,
    DB_NAME = _process$env.DB_NAME,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_PORT = _process$env.DB_PORT,
    DB_HOST = _process$env.DB_HOST;
module.exports = new Sequelize('phonebook', 'root', 'password', {
  host: 'localhost',
  port: 3307,
  dialect: "mysql"
});