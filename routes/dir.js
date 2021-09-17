const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Directory = require("../models/Phonebook");
const Sequelize = require("sequelize");
const { application } = require("express");
const Op = Sequelize.Op;

//Retrieve contact data

router.get("/", (req, res) =>
  Directory.findAll()
    .then((dir) =>
      res.render("directory", {
        dir,
      })
    )
    .catch((err) =>
      res.render("error", {
        error: err,
      })
    )
);

// add page

router.get("/add", (req, res) => res.render("add"));

//Add contact details
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

// Add search ,

router.get("/search", (req, res) => {
  //search by name
  let { value, term } = req.query;
  console.log(term);

  if (term === "department") {
    Directory.findAll({
      where: { department: { [Op.like]: "%" + value + "%" } },
    })
      .then((dir) => res.render("directory", { dir }))
      .catch((err) => res.render("error", { error: err }));
  } else {
    Directory.findAll({
      where: {
        [Op.or]: [
          { first_name: { [Op.like]: "%" + value + "%" } },
          { last_name: { [Op.like]: "%" + value + "%" } },
        ],
      },
    })

      .then((dir) =>
        res.render("directory", {
          dir,
        })
      )
      .catch((err) => res.render("error", { error: err }));
  }
});

module.exports = router;
