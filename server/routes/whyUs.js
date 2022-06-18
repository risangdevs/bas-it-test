const express = require("express");
const WhyUsController = require("../controllers/whyUs");
const adminAuth = require("../middlewares/adminAuth");
const router = express.Router();

router.get("/", WhyUsController.getWhyUs);
router.put("/", adminAuth, WhyUsController.editWhyUs);
module.exports = router;
