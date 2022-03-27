// Need to first run "npm install node-fetch" and "npm install cheerio"
const fetch = require("node-fetch");
const cheerio = require("cheerio");

// Get raw data
const getRawData = (URL) => {
    return fetch(URL)
       .then((response) => response.text())
       .then((data) => {
          return data;
       });
 };

 // URL for data
 const URL = "https://www.history.com/topics/japan/russo-japanese-war";

 // Return body test of website
const scrape = async () => {
    const raw = await getRawData(URL);
    let $ = cheerio.load(raw);
    let body = $('p');
    console.log(body.text());
 };

 // Scrape the URL
 scrape();