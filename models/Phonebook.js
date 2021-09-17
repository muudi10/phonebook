const db = require("../config/database");
const Sequelize = require("sequelize");

const Directory = db.define("phonebook", {
  title: {
    type: Sequelize.STRING,
  },
  first_name: {
    type: Sequelize.STRING,
  
  },
  last_name: {
    type: Sequelize.STRING,
  
  },
  department: {
    type: Sequelize.STRING
  },
  specialty: {
    type: Sequelize.STRING,
  
  },
  telephone: {
    type: Sequelize.INTEGER,
 
  },
  pager:{
      type:Sequelize.INTEGER,
  },
  contact_email:{
      type:Sequelize.STRING,
  },

imagepath:{
  type: Sequelize.STRING
}

});
module.exports = Directory