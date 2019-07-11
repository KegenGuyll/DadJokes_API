const jokes = require('./jokes/index.json');
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

let doc = db.collection('DadJokes').doc('Jokes');
const test = () => {
  doc
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        doc.data().jokes.map(joke => {
          console.log(joke.step);
        });
        return 'document found';
      }
    })
    .catch(err => {
      console.error('Error getting document', err);
      process.exit();
    });
};

const createJoke = jokeData => {
  db.collection('DadJoke')
    .doc('Jokes')
    .update({
      jokes: admin.firestore.FieldValue.arrayUnion({
        setup: jokeData.setup,
        punchline: jokeData.punchline,
        id: jokes.length++
      })
    })
    .then(() => {
      return 'Your joke as been succesfully added';
    })
    .catch(e => {
      return e;
    });
};

const randomJoke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
};

const jokeById = id => {
  return jokes.filter(joke => joke.id === id);
};

/**
 * Get N random jokes from a jokeArray
 */
const randomN = (jokeArray, n) => {
  const limit = jokeArray.length < n ? jokeArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * jokeArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return jokeArray[randomIndex];
  });
};

const randomTen = () => randomN(jokes, 10);

const jokeByType = (type, n) => {
  return randomN(jokes.filter(joke => joke.type === type), n);
};

module.exports = {
  randomJoke,
  randomTen,
  jokeByType,
  jokeById,
  test,
  createJoke
};
