const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Directory = require("../models/Phonebook");
const Sequelize = require("sequelize");
const { application } = require("express");
const Op = Sequelize.Op;
const multer = require("multer");
const path = require("path");
const { uploadFile, getFileStream } = require("../s3");
const  fs = require('fs')
const util = require('util')


router.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// router.post ("/add", upload.single('inputImage'),(req, res) => {
//     const { first_name, last_name, contact_email, telephone, pager, department } =
//       req.body;
//      const imagePath = req.file.path
//      console.log(imagePath)
//     Directory.create({
//       first_name: first_name,
//       last_name: last_name,
//       telephone: telephone,
//       pager: pager,
//       contact_email: contact_email,
//       department: department,
//       imagePath:imagePath
//     }).then(res.render('success'))

//   });

router.post("/add", upload.single("inputImage"), async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      contact_email,
      telephone,
      pager,
      department,
    } = req.body;
    const file = req.file;
    const s3Results = await uploadFile(file);
    console.log(s3Results.Location)
    

    await Directory.create({
      first_name: first_name,
      last_name: last_name,
      telephone: telephone,
      pager: pager,
      contact_email: contact_email,
      department: department,
   
    });
    await res.render('success')
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
