const admin = require('firebase-admin');
const uuid = require('uuid');
const db = admin.firestore();

const createJoke = async jokeData => {
  const id = uuid.v4();
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
      return { setup, punchline, type, id };
    })
    .catch(e => {
      return e;
    });
};

module.exports = { createJoke };
