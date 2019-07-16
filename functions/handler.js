// const jokes = require('./jokes/index.json');
// const admin = require('firebase-admin');
// const serviceAccount = require('./ServiceAccountKey.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// const db = admin.firestore();

// let doc = db.collection('DadJokes').doc('Jokes');
// const test = () => {
//   doc
//     .get()
//     .then(doc => {
//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         doc.data().jokes.map(joke => {
//           console.log(joke.step);
//         });
//         return 'document found';
//       }
//     })
//     .catch(err => {
//       console.error('Error getting document', err);
//       process.exit();
//     });
// };

// const createJoke = jokeData => {
//   doc
//     .update({
//       jokes: admin.firestore.FieldValue.arrayUnion({
//         setup: jokeData.setup,
//         punchline: jokeData.punchline,
//         id: jokes.length++
//       })
//     })
//     .then(() => {
//       return 'Your joke as been succesfully added';
//     })
//     .catch(e => {
//       return e;
//     });
// };

// module.exports = {
//   test,
//   createJoke
// };
