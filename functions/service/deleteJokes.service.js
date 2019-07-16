const admin = require('firebase-admin');
const db = admin.firestore();
const { retrieveJokes } = require('../service/jokes.service');
const _ = require('lodash');

const deleteJoke = async jokeId => {
  const doc = db.collection('DadJokes').doc('Jokes');
  const data = await retrieveJokes();

  const remove = data.jokes.map((joke, index) => {
    if (joke.id === jokeId) {
      return index;
    }
  });

  const removeIndex = _.compact(remove)[0];

  const removedJoke = data.jokes.splice(removeIndex, 1);

  return doc
    .set(data)
    .then(() => {
      return removedJoke;
    })
    .catch(e => {
      return e;
    });
};

module.exports = { deleteJoke };
