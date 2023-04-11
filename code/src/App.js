import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Firebase
import firebase from 'firebase';
import { checkUserRegistration } from './firebase/db';

// Components
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';

class App extends Component {
  state = {
    loggedIn: false,
    user: {},
  };

  componentDidMount() {
    this.authListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true, user });
        checkUserRegistration(user);
      } else {
        this.setState({ loggedIn: false, user: null });
      }
    });
  }

  componentWillUnmount() {
    // Unmount the authListener when the component unmounts
    this.authListener();
  }

  render() {
    const { loggedIn, user } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={value =>
              loggedIn ? <Redirect to="/home" /> : <LoginScreen />
            }
          />

          <Route
            path="/home"
            render={() =>
              loggedIn ? <HomeScreen user={user} /> : <Redirect to="/" />
            }
          />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
