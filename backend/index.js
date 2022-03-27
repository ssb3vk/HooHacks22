// const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require("cheerio");
const express = require('express');
const app = express();
const PORT = 3001;

// URL for data
// const URL = "https://www.history.com/topics/japan/russo-japanese-war";

// Get raw data
const getRawData = (url) => {
    return fetch(url)
       .then((response) => response.text())
       .then((data) => {
           console.log("fetch data");
            console.log(data);
          return data;
       });
 };

 // Return website body
 const body = async (url) => {
    const raw = await getRawData(url);
    let $ = cheerio.load(raw);
    return $('p').text();
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

app.get('/data/:link', async (req, res) => {
    const URL = req.params.link.replace(/%2f/g, '/');
    // const URL = req.params.link.replaceAll('%2f', '/');
    const [t, b, s] = await Promise.all([title(URL), body(URL), fk(URL)]);
    console.log("fetch body");
    console.log(b);
    res.json({title: t, fk: s, url: URL, body: b});
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});