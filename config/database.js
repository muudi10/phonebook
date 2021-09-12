const Sequelize = require("sequelize");

const path = require("path");

// // extract any command line arguments from argv
// const args = process.argv.slice(2)[0];

// // use args to determine if .env or .env.test should be loaded
// const envFile = args === "test" ? "../.env" : "../.env.test";

// // load environment variables from env files
// require("dotenv").config({
//   path: path.join(__dirname, envFile),
// });

// const { DB_USER, DB_NAME, PASSWORD, PORT, HOST } = process.env;

module.exports = new Sequelize('phonebookapp', 'b8d79f1daeb050', '5b61b519', {
  host: 'us-cdbr-east-04.cleardb.com',
  port: 3306,
  dialect: "mysql",
  database: "heroku_79fb0617e037b18"
});
