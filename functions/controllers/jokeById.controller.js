const { retrieveJokes } = require('../service/jokes.service');

const jokeById = async (request, response) => {
  const data = await retrieveJokes();
  const payload = await request;

  if (/^\d+$/.test(payload.params.id) === true) {
    const joke = await data.jokes.filter(
      joke => joke.id === Number(payload.params.id)
    );
    return response.json(joke);
  } else {
    const joke = await data.jokes.filter(joke => joke.id === payload.params.id);
    return response.json(joke);
  }
};

module.exports = { jokeById };
