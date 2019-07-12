const jokes = require('../jokes/index.json');
const { randomN } = require('../service/randomN.service');

const randomJoke = async (request, response) => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  return response.json(joke);
};

const randomJokeCount = async (request, response) => {
  const payload = await request;

  const joke = await randomN(jokes, payload.params.count);

  return response.json(joke);
};

module.exports = { randomJoke, randomJokeCount };
