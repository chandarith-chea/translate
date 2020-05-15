const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to darith application." });
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const unirest = require("unirest");

const req = unirest("POST", "http://127.0.0.1:8080/translate");

req.headers({
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": "e63a731f0cmsh5952909fe87a4e7p1cf9f3jsn1e2dab3d8ec9",
    "accept-encoding": "application/gzip",
    "content-type": "application/x-www-form-urlencoded"
});

req.form({
    "source": "en",
    "q": "Hello, world!",
    "target": "km"
});

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
