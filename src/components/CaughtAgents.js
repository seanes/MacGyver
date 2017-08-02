import React from 'react'
import styles from '../css/page/addAgent.css'

class CaughtAgentsComponents extends React.Component {
  render() {
    return (
      <div className={styles.caughtAgents}>
        <h1>Agenter du har fanget</h1>
        <div className={styles.agent}>
          Sean Erik Scrully
        </div>
        <div className={styles.agent}>
          Terje 'the cool guy' Lønøy
        </div>
      </div>
    );
  }
}

export default CaughtAgentsComponents;
