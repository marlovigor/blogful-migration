require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const articlesRouter = require('./articles/articles-router')


const app = express()

const morganOption = (process.env.NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())


app.use('/articles', articlesRouter)


app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.get('/xss', (req, res) => {
    res.cookie('secretToken', '1234567890');
    res.sendFile(__dirname + '/xss-example.html');
  });


module.exports = app