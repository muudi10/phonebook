"use strict";

var express = require("express");

var router = express.Router();

var db = require("../config/database");

var Directory = require("../models/Phonebook");

var Sequelize = require("sequelize");

var _require = require("express"),
    application = _require.application;

var Op = Sequelize.Op;

var multer = require("multer");

var path = require("path");

var _require2 = require("../s3"),
    uploadFile = _require2.uploadFile,
    getFileStream = _require2.getFileStream;

var fs = require('fs');

var util = require('util');

router.use("/uploads", express["static"]("uploads"));
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
}); // router.post ("/add", upload.single('inputImage'),(req, res) => {
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

router.post("/add", upload.single("inputImage"), function _callee(req, res) {
  var _req$body, first_name, last_name, contact_email, telephone, pager, department, file, _ref, Location;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, contact_email = _req$body.contact_email, telephone = _req$body.telephone, pager = _req$body.pager, department = _req$body.department;
          file = req.file;
          _context.next = 5;
          return regeneratorRuntime.awrap(uploadFile(file));

        case 5:
          _ref = _context.sent;
          Location = _ref.Location;
          console.log(Location);
          _context.next = 10;
          return regeneratorRuntime.awrap(Directory.create({
            first_name: first_name,
            last_name: last_name,
            telephone: telephone,
            pager: pager,
            contact_email: contact_email,
            department: department,
            imagepath: Location
          }));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(res.render('success'));

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
module.exports = router;