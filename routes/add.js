const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Directory = require("../models/Phonebook");
const Sequelize = require("sequelize");
const { application } = require("express");
const Op = Sequelize.Op;


router.post ("/add", (req, res) => {
    const { first_name, last_name, contact_email, telephone, pager, department } =
      req.body;
    Directory.create({
      first_name: first_name,
      last_name: last_name,
      telephone: telephone,
      pager: pager,
      contact_email: contact_email,
      department: department,
    }).then(res.render('success'))
   
  });

  module.exports = router