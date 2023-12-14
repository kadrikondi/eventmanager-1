const express = require("express");
// const {
//     default: mongoose
// } = require('mongoose')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./route/index");
const uploadrouter = require("./route/upload");

const cors = require("cors");

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/", router);
app.use("/", uploadrouter);

// var corsOptions = {
//   origin: "http://localhost:3000",
// };



const port = 8000 || process.ENV;

app.get("*", (req, res) => {
  res.send(`<h1>ERORR 404, PAGE NOT FOUND</h1>`);
});

app.listen(port, () => {
  mongoose
    .connect("mongodb://localhost/eventcenta")

    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`our app is listening on port ${port}`);
});
