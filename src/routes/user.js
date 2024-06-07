const express = require("express");
const { create_user } = require("../controller/user");
const router = express.Router();

router.post("/signup", create_user);

module.exports = router
