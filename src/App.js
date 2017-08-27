// @flow
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeView from './views/HomeView';
import AddView from './views/AddView';
import ScoreBoardView from './views/ScoreBoardView';
import LoginView from './views/LoginView';
import PartcipantsView from './views/PartcipantsView';
import PrivateRoute from './views/PrivateRoute';
import TabBar from './components/TabBar';
import { connect } from 'react-redux';
import styles from './css/main.css';

class App extends React.Component {

  componentDidMount() {
    window.scrollTo(0,1);
  }

  render() {
    const { authenticated, checked } = this.props;
    return (
      <div>
        <Router>
          {checked &&
          <div>
            <div className={styles.page}>
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
                path="/participants"
                component={PartcipantsView}
              />
              <PrivateRoute
                authenticated={authenticated}
                path="/score"
                component={ScoreBoardView}
              />
              <Route path="/login" component={LoginView} />
            </div>
            {authenticated &&
            <TabBar/>}
          </div>}
        </Router>
      </div>
    );
  }
}


const mapStateToProps = ({ session, route }) => ({
  checked: session.checked,
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(App);
