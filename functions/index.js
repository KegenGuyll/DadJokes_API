const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const util = require('util');
const {
  randomJoke,
  randomTen,
  jokeByType,
  jokeById,
  test,
  createJoke
} = require('./handler');

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

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/test', (req, res) => {
  res.json(test());
});

app.get('/random_joke', (req, res) => {
  res.json(randomJoke());
});

app.post('/jokes/create', (req, res) => {
  const jokeData = {
    setup: req.body.setup,
    punchline: req.body.punchline
  };
  res.json(createJoke(jokeData));
});

app.get('/random_ten', (req, res) => {
  res.json(randomTen());
});

app.get('/jokes/random', (req, res) => {
  res.json(randomJoke());
});

app.get('/jokes/ten', (req, res) => {
  res.json(randomTen());
});

app.get('/jokes/:id', (req, res) => {
  res.json(jokeById(Number(req.params.id)));
});

app.get('/jokes/:type/random', (req, res) => {
  res.json(jokeByType(req.params.type, 1));
});

app.get('/jokes/:type/ten', (req, res) => {
  res.json(jokeByType(req.params.type, 10));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error',
    message: err.message
  });
});

exports.DadJokes = functions.https.onRequest(app);
