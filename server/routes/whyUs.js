const express = require("express");
const WhyUsController = require("../controllers/whyUs");
const router = express.Router();

router.get("/", WhyUsController.getWhyUs);
module.exports = router;