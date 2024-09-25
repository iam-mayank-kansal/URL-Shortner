const express = require('express');
const app = express();
const { ConnectWithDB } = require("./connection.js");
const { router } = require("./routes/route.js");

const port = 3000;

// Connecting to DB
ConnectWithDB("mongodb://127.0.0.1:27017/URL-Shortner-EJS")
    .then(() => { console.log("DB Connected") })
    .catch((error) => { console.error("Unable to Connect: ", error); });

// Setting up EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
