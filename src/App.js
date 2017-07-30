// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import HomeView from './views/HomeView';
import AddView from './views/AddView';
import ScoreBoardView from './views/ScoreBoardView';
import NoMatchView from './views/NoMatchView';
import PartcipantsView from './views/PartcipantsView';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet title='Home' />
        <Header/>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route path='/add' component={AddView} />
          <Route path='/partcipants' component={PartcipantsView} />
          <Route path='/score' component={ScoreBoardView} />
          <Route component={NoMatchView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
