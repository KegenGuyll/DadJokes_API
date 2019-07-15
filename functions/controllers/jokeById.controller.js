const { retrieveJokes } = require('../service/jokes.service');

const jokeById = async (request, response) => {
  const data = await retrieveJokes();
  const payload = await request;
  const joke = await data.jokes.filter(
    joke => joke.id === Number(payload.params.id)
  );

  return response.json(joke);
};

module.exports = { jokeById };
