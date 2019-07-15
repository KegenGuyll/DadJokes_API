const admin = require('firebase-admin');
const db = admin.firestore();

const deleteJoke = async jokeId => {
  const doc = db.collection('DadJokes').doc('Jokes');
  return doc.update({
    jokes: admin.firestore.FieldValue.arrayRemove({
      id: jokeId
    })
      .then(() => {
        return 'removed joke successfully';
      })
      .catch(e => {
        return e;
      })
  });
};

module.exports = { deleteJoke };
