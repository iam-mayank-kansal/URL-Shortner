const mongoose = require("mongoose");

const URL_Schema = new mongoose.Schema(
    {
        shortID: { type: String, required: true },
        URL: { type: String, required: true },
    },
    {
        timestamps: true
    }
)

const URL_Model = mongoose.model("Url-Model", URL_Schema);

module.exports = {
    URL_Model
}
