const express = require("express");
const router = express.Router();

const worktype = require("../controller/company-location");

router.get("/", worktype.companylocation);

module.exports = router;
