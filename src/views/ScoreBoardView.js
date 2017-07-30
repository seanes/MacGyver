import React from 'react'
import Helmet from 'react-helmet';
import ScoreboardComponent from '../components/Scoreboard.js';
import mockRows from '../mockdata/scoreboardMock.js';

export default () => {
  return (
    <div>
      <Helmet title="Scoreboard"/>
      <h1>Scoreboard</h1>
      <ScoreboardComponent participants={mockRows}/>
    </div>
  );
}
