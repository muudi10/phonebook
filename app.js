const express = require("express");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const app = express();
const path = require("path");
const db = require("./config/database");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const exp = require("constants");
app.use(express.json());

const APP_PORT = 5000;

app.listen(APP_PORT, (req, res) => {});

db.authenticate()
  .then(() => {
    console.log(`Connection established `);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "handlebars");
app.get("/", (req, res) => res.render("index", { layout: "landing" }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use("/dir", require("./routes/dir"));

app.engine(
  "handlebars",

  exphbs({
    defaultLayout: "main",

    runtimeOptions: {
      allowProtoPropertiesByDefault: true,

      allowProtoMethodsByDefault: true,
    },
  })
);
