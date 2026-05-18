require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

// Simple Logger
if (process.env.NODE_ENV === "dev") {

    app.use((req, res, next) => {

        console.log(`${req.method} ${req.originalUrl}`);

        next();

    });

}
const connectedDB = require ("./config/db");
connectedDB();

app.get("/test", (req, res) => {

    res.json({ msg: "Test Route" });

});

const port = process.env.PORT || 300;

app.listen(port, () => {

    console.log(`Server Is Running At Port ${port}`);

});