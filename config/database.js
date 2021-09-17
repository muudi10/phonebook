const Sequelize = require("sequelize");
require('dotenv').config()
const path = require("path");




const { DB_USER, DB_NAME, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;

module.exports = new Sequelize( 'phonebook', 'root','password', {
  host: 'localhost',
  port: 3307,
  dialect: "mysql",
});

