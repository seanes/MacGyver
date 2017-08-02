import React from 'react'
import styles from '../css/page/addAgent.css'
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom'
import InputSubmit from './InputSubmit'
import CaughtAgents from './CaughtAgents'

class AddAgentComponent extends React.Component {
  handleSubmit (agentName) {
    console.log(agentName)
  }

  render() {
    return (
      <div className={styles.addAgent}>
        <div className={styles.agentInput}>
          <InputSubmit label="Legg til agent" cb={(agentName) => this.handleSubmit(agentName)}/>
        </div>
        <CaughtAgents />
      </div>
    );
  }
}

export default AddAgentComponent;
