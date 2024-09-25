const express = require("express");
const router = express.Router();
const { ShowHomePage, GetURL, GiveShortUrl, RedirectToUrl } = require("../controllers/controller");

router.get("/", ShowHomePage);
router.get("https://url-shortner-oxkn1dibo-mayanks-projects-b06bc3e0.vercel.app/", ShowHomePage);

router.get("/urlPage", GetURL);
router.get("https://url-shortner-oxkn1dibo-mayanks-projects-b06bc3e0.vercel.app/urlPage", GetURL);

router.post("/urlPage", GiveShortUrl);
router.post("https://url-shortner-oxkn1dibo-mayanks-projects-b06bc3e0.vercel.app/urlPage", GiveShortUrl);

router.get("/:shortID", RedirectToUrl);
router.get("https://url-shortner-oxkn1dibo-mayanks-projects-b06bc3e0.vercel.app/:shortID", RedirectToUrl);

module.exports = { router };
