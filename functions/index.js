const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const util = require('util');
const { randomTen, test, createJoke } = require('./handler');
const {
  randomJoke,
  randomJokeCount
} = require('./controllers/randomJoke.controller');
const { jokeById } = require('./controllers/jokeById.controller');
const {
  jokeByType,
  jokeByTypeCount
} = require('./controllers/jokeByType.controller');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Try /random_joke, /random_ten, /jokes/random, or /jokes/ten');
});

app.get('/test', (req, res) => {
  res.json(test());
});

app.get('/random/jokes', (req, res) => {
  randomJoke(req, res);
});

app.get('/random/jokes/:count', (req, res) => {
  randomJokeCount(req, res);
});

app.post('/jokes/create', (req, res) => {
  const jokeData = {
    setup: req.body.setup,
    punchline: req.body.punchline
  };
  res.json(createJoke(jokeData));
});

app.get('/jokes/:id', (req, res) => {
  jokeById(req, res);
});

app.get('/random/type/:type', (req, res) => {
  jokeByType(req, res);
});

app.get('/random/type/:type/:count', (req, res) => {
  jokeByTypeCount(req, res);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error',
    message: err.message
  });
});

exports.DadJokes = functions.https.onRequest(app);
