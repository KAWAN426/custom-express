const express = require('express');
const helmet = require('helmet');
const app = express();
// const cors = require('cors');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const home = require("./src/routes/home/home");

app.use("/",home);

module.exports = app;