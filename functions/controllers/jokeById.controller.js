const jokes = require('../jokes/index.json');

const jokeById = async (request, response) => {
  const payload = await request;
  const joke = await jokes.filter(
    joke => joke.id === Number(payload.params.id)
  );

  return response.json(joke);
};

module.exports = { jokeById };
