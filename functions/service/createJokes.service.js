const admin = require('firebase-admin');
const { retrieveJokes } = require('../service/jokes.service');
const db = admin.firestore();

const createJoke = async jokeData => {
  const data = await retrieveJokes();
  const id = data.jokes.length++;
  const setup = jokeData.setup;
  const punchline = jokeData.punchline;
  const type = jokeData.type;
  const doc = db.collection('DadJokes').doc('Jokes');

  return doc
    .update({
      jokes: admin.firestore.FieldValue.arrayUnion({
        id,
        setup,
        punchline,
        type
      })
    })
    .then(() => {
      return 'add joke successfully';
    })
    .catch(e => {
      return e;
    });
};

module.exports = { createJoke };
