let array = {};

const fetch = require("node-fetch");
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log(JSON.stringify(mockAPIResponse))
console.log(`Your API key is ${process.env.API_KEY}`);

 //Meaning Cloud API
 const postAPI = async (urlData) => {
  const meaningCloudUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&url=${urlData}&lang=en`;
  console.log(meaningCloudUrl)
  const response = await fetch(meaningCloudUrl);
  
    try {
      data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  app.post("/submitData", (req, res) => {
    const urlData = req.body.url;
    postAPI(urlData)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => console.log(err));
  });

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(meaningcloudAPI);
})

app.post("/analysis", (req, res) => {
  res.send({ array });
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
