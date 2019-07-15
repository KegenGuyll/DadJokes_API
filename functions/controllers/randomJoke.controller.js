const { randomN } = require('../service/randomN.service');
const { retrieveJokes } = require('../service/jokes.service');

const randomJoke = async (request, response) => {
  const data = await retrieveJokes();
  const joke = data.jokes[Math.floor(Math.random() * data.jokes.length)];

  return response.json(joke);
};

const randomJokeCount = async (request, response) => {
  const payload = await request;
  const data = await retrieveJokes();
  const joke = await randomN(data.jokes, payload.params.count);

  return response.json(joke);
};

module.exports = { randomJoke, randomJokeCount };
