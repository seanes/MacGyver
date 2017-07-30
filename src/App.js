// @flow
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeView from './views/HomeView';
import AddView from './views/AddView';
import ScoreBoardView from './views/ScoreBoardView';
import LoginView from './views/LoginView';
import PartcipantsView from './views/PartcipantsView';
import PrivateRoute from './views/PrivateRoute';
import Header from './components/Header';
import { connect } from 'react-redux';

const App = ({ authenticated, user, checked }) =>
  <div>
    <Router>
      {checked &&
        <div>
          <Header user={user} authenticated={authenticated}/>
          <PrivateRoute
            authenticated={authenticated}
            exact
            path="/"
            component={HomeView}
          />
          <PrivateRoute
            authenticated={authenticated}
            path="/add"
            component={AddView}
          />
          <PrivateRoute
            authenticated={authenticated}
            path="/partcipants"
            component={PartcipantsView}
          />
          <PrivateRoute
            authenticated={authenticated}
            path="/score"
            component={ScoreBoardView}
          />
          <Route path="/login" component={LoginView} />
        </div>}
    </Router>
  </div>;

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated,
  user: session.user,
});

export default connect(mapStateToProps)(App);
