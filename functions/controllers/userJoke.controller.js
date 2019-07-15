const { createJoke } = require('../service/createJokes.service');

const addUserJoke = async (request, response) => {
  const jokeData = {
    setup: request.body.setup,
    punchline: request.body.punchline,
    type: request.body.type
  };

  const creation = await createJoke(jokeData);

  return response.json(creation);
};

module.exports = { addUserJoke };
