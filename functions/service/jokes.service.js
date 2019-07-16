const admin = require('firebase-admin');
const db = admin.firestore();

const retrieveJokes = async () => {
  const doc = await db.collection('DadJokes').doc('Jokes');
  return doc
    .get()
    .then(doc => {
      if (!doc.exists) {
        return 'No such document!';
      } else {
        return doc.data();
      }
    })
    .catch(e => {
      return e;
    });
};

module.exports = {
  retrieveJokes
};
