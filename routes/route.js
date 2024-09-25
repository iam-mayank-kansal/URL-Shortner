const express = require("express");
const router = express.Router();
const { ShowHomePage, GetURL, GiveShortUrl , RedirectToUrl} = require("../controllers/controller");

router.get("/", ShowHomePage);
router.get("/urlPage", GetURL);
router.post("/urlPage", GiveShortUrl);
router.get("/:shortID", RedirectToUrl);

module.exports = { router };
