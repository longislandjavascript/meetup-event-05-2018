import firebase from 'firebase';

export const googleLogin = providerName => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const logout = () => firebase.auth().signOut();
