const express = require('express');
const router = express();

const {output,process} = require("./home.ctrl");

router.post("/", process.home);
router.get("/", output.home);

module.exports = router;