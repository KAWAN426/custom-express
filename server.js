const express = require('express');
const helmet = require('helmet');
const app = express();
const cors = require('cors');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", (req, res) => {
  const post = req.body;
  console.log(post);
});

app.get("/", (req,res) => {
  res.send("My Server");
});

app.listen(process.env.PORT || 8080);
