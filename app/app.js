const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

const home = require("./src/routes/home/home");

app.use("/", home);

module.exports = app;