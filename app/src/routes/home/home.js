const express = require('express');
const router = express();

const ctrl = require("./home.ctrl");

router.post("/", ctrl.homePost);
router.get("/", ctrl.homeGet);

module.exports = router;