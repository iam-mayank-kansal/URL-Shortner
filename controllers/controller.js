const mongoose = require("mongoose");
const { v4 } = require("uuid");
const { URL_Model } = require("../models/model");

async function ShowHomePage(req, res) {
    return res.render('homePage');
}

async function GetURL(req, res) {
    return res.render('mainPage');
}

async function GiveShortUrl(req, res) {
    const ShortID = v4();
    const longUrl = req.body.longUrl;
    
    console.log("longURL : ", longUrl);
    console.log("ShortID : ", ShortID);
    
    await URL_Model.create({
        shortID: ShortID,
        URL: longUrl
    });
    
    return res.render('finalPage', { shortId: ShortID, longUrl }); // Passing data to the view
}

async function RedirectToUrl(req, res) {
    const ShortId = req.params.shortID;
    const URLObj = await URL_Model.findOne({ shortID: ShortId });

    if (URLObj) {
        return res.redirect(URLObj.URL); // Correct redirect method
    } else {
        return res.status(404).send("URL not found");
    }
}

module.exports = {
    ShowHomePage, 
    GetURL, 
    GiveShortUrl, 
    RedirectToUrl
};
