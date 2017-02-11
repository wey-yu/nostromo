"use strict";
const express = require("express");
const bodyParser = require("body-parser");

let port = process.env.PORT || 8080;

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send({message:"💙", remark:"hello 🌍 "});
})

app.get('/hi', (req, res) => {
  res.send({message:"🐼", remark:"hi 🌍 "});
})

app.get('/yo', (req, res) => {
  res.send({message:"🐼", remark:"yo !!!..."});
})

app.listen(port)
console.log(`🌍 Web Server is started - listening on ${port}`)