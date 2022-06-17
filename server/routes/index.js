const express = require("express");
const router = express.Router();
const whyUsRoutes = require("./whyUs");
const userRoutes=require('./user');
router.use("/whyus", whyUsRoutes);
router.use('/user', userRoutes)
module.exports=router