const express = require('express');
const helmet = require('helmet');
const app = express();
const cors = require('cors');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8080;

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
});

app.get("/", (req,res) => {
  res.send("My Server");
});

app.listen(PORT,()=>{console.log(`Server on ${PORT} port`)});