const jokes = require('../jokes/index.json');
const { randomN } = require('../service/randomN.service');

const jokeByType = async (request, response) => {
  const payload = await request;
  const joke = await randomN(
    jokes.filter(joke => joke.type === payload.params.type),
    1
  );

  return response.json(joke);
};

const jokeByTypeCount = async (request, response) => {
  const payload = await request;
  const joke = await randomN(
    jokes.filter(joke => joke.type === payload.params.type),
    payload.params.count
  );

  return response.json(joke);
};

module.exports = { jokeByType, jokeByTypeCount };
