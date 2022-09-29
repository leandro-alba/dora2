const express = require("express");
const router = express.Router();
const answersController = require("../controllers/answers");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createAnswer/:id",ensureAuth, answersController.createAnswer);


module.exports = router;
