const Sequelize = require("sequelize");
require('dotenv').config()
const path = require("path");

// // extract any command line arguments from argv
// const args = process.argv.slice(2)[0];

// // use args to determine if .env or .env.test should be loaded
// const envFile = args === "test" ? "../.env" : "../.env.test";

// // load environment variables from env files
// require("dotenv").config({
//   path: path.join(__dirname, envFile),
// });



const { DB_USER, DB_NAME, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;

module.exports = new Sequelize( DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
});

// // const { DB_USER, DB_NAME, PASSWORD, PORT, HOST } = process.env;

// module.exports = new Sequelize('heroku_79fb0617e037b18', 'b8d79f1daeb050', '5b61b519', {
//   host: 'us-cdbr-east-04.cleardb.com',
//   port: 3306,
//   dialect: "mysql",
// });
