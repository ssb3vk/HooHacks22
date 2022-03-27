const fetch = require("node-fetch");
const cheerio = require("cheerio");
const express = require('express');
const app = express();
const PORT = 1337;

// URL for data
const URL = "https://www.history.com/topics/japan/russo-japanese-war";

// Get raw data
const getRawData = (url) => {
    return fetch(url)
       .then((response) => response.text())
       .then((data) => {
          return data;
       });
 };

// Return website title
const title = async (url) => {
    const raw = await getRawData(url);
    let $ = cheerio.load(raw);
    return $('title').text(); // possibly h1 instead?
};

// Return fk score
const fk = async (url) => {
    const raw = await getRawData(url);
    let $ = cheerio.load(raw);
    const body = $('p').text();
    return 69; // change to use https://github.com/dana-ross/flesch-kincaid
};

app.get('/', async (req, res) => {
    const [t, s] = await Promise.all([title(URL), fk(URL)]);
    res.json({title: t, fk: s, url: URL});
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});