import React from 'react'
import styles from '../css/page/addAgent.css'
import AgentIcon from './icons/AgentIcon'

class CaughtAgentsComponents extends React.Component {
  render() {
    return (
      <div className={styles.caughtAgents}>
        <h1>Agenter du har fanget</h1>
        <div className={styles.agent}>
          <div className={styles.agentImage}><AgentIcon color="#fff"/></div>
          <span>Sean Erik Scrully</span>
        </div>
        <div className={styles.agent}>
          <div className={styles.agentImage}><AgentIcon color="#fff" /></div>
          <span>Terje 'the cool guy' Lønøy</span>
        </div>
      </div>
    );
  }
}

export default CaughtAgentsComponents;
