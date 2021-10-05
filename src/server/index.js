const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')

//Variables for API call
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
const json = '&of=json&txt='
const apiKey = process.env.API_KEY
const end = '&model=General&lang=en'

//start up an instance of app
const app = express()
app.use(express.static('dist'))

//Dependencies

//Middleware
//Install body-parser and configure express to use as middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Install cors for cross-origin allowance
const cors = require('cors')
//const { url } = require('inspector')
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests

app.listen(3031, function () {
  console.log('Example app listening on port 3031!')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

//for api key
console.log(`Your API key is ${apiKey}`)

//inserting post request and the fetch data

app.post('/api', async (req, res) => {
  const resultSentiment = await fetch(
    `${baseURL}${apiKey}&lang=auto&url=${req.body.inputText}`,
    {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  console.log('result ====>', resultSentiment)

  try {
    const data = await resultSentiment.json()
    console.log(resultSentiment, data)
    res.send(data)
  } catch (error) {
    console.log('error', error)
    //appropriately handle the error
  }
})
