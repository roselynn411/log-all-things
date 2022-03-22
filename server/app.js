const express = require('express');
const fs = require('fs');
const app = express();
//require csv to json
const csvParser = require('csvtojson');
const csvFilePath = './log.scv';
let log;
console.log(log);
//Write the code required to generate a log line for every request following this format:
app.use((req, res, next)=> {
// write your logging code here..
  //grab userAgent found in request header, reformat to replace commas
  const reqAgent = req.headers['user-agent'].replace(',', '');
  //request time; use  ISO date standard
  //ISOstring is a string representing the given data in ISOS
  const reqTime = new Date().toISOString();
  // request method
  const reqMethod = req.method;
  //request url
  const reqResource = req.url;
  //request http version
  const reqVersion = `HTTP/${req.httpVersion}`;
  const reqStatus = 200;
  log = `${reqAgent},${reqTime},${reqMethod},${reqResource},${reqVersion},${reqStatus}\n`;
  next(); // after complier goes through 20-23, move into the next middleware
});

//cd go into your root directory
app.get('/',(req,res) =>{
  res.status(200).send('ok');
}



//write your code to return a json object containing the log data here
//get data from csv parser


)

module.exports = app;