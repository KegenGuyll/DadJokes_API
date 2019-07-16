const { createJoke } = require('../service/createJokes.service');
const { deleteJoke } = require('../service/deleteJokes.service');

const addUserJoke = async (request, response) => {
  const jokeData = {
    setup: request.body.setup,
    punchline: request.body.punchline,
    type: request.body.type
  };

  const creation = await createJoke(jokeData);

  return response.json(creation);
};

const removeUserJoke = async (request, response) => {
  const id = request.params.id;

  const remove = await deleteJoke(id);

  return response.json({
    message: 'Joke removed successfully',
    joke: remove[0]
  });
};

module.exports = { addUserJoke, removeUserJoke };
