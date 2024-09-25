const mongoose = require("mongoose");

function ConnectWithDB(URL) {
   return mongoose.connect(URL);
}

module.exports = {
    ConnectWithDB
}