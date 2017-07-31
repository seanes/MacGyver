import React from 'react'
import Helmet from 'react-helmet';
import ScoreboardComponent from '../components/Scoreboard';
import { participants } from '../mockdata/scoreboardMock';
import styles from '../main.css';

export default () => {
  return (
    <div>
      <Helmet title="Scoreboard"/>
      <h1>Scoreboard</h1>
      <ScoreboardComponent participants={participants} className={styles.scoreboard}/>
    </div>
  );
}
