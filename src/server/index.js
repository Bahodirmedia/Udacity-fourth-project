const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')
console.log(`Your API key is ${process.env.API_KEY}`);

const API_KEY = process.env.API_KEY;

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

app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// app.get('/test', function (req, res) {
//     res.json(mockAPIResponse);
// })

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.post('/article', async function (req, res) {
    const url = req.body.formText;
    const apiResult = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=auto`);
    try {
        const data = await apiResult.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(`ERROR: Could not get data from Api. Msg: ${error}`);
        alert(`ERROR: Could not get API data. Please try again later.`);
    }
})