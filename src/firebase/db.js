import firebase from 'firebase';

const db = firebase.database();

export const checkUserRegistration = user => {
  const { uid, email, photoURL } = user;
  const userObject = { uid, email, photoURL };

  return db
    .ref(`/users/${uid}`)
    .once('value')
    .then(snapshot => {
      const user = snapshot.val();
      if (!user) {
        addNewUser(userObject);
      }
      return user;
    });
};

const addNewUser = ({ uid, ...rest }) => {
  return firebase
    .database()
    .ref('users/' + uid)
    .set({
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      ...rest,
    });
};
