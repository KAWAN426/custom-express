const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')
const dotenv = require('dotenv');

// const connectDB = require('./config/db');
// connectDB();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

const home = require("./routes/home/index");
const data = require("./routes/api/data/index");

app.use("/", home);
app.use("/api/data", data);

// 성능 체크
// npm i -g loadtest
// loadtest http://localhost:3001/api/withcluster -n 1000 -c 100
app.get('/api/testcluster', function (req, res) {
  console.time('noclusterApi');
  const base = 8;
  let result = 0;
  for (let i = Math.pow(base, 7); i >= 0; i--) {
    result += i + Math.pow(i, 10);
  };
  console.timeEnd('noclusterApi');
  console.log(`RESULT IS ${result} - ON PROCESS ${process.pid}`);
  res.send(`Result number is ${result}`);
});

module.exports = app;
