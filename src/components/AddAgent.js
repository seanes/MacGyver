import React from 'react'
import styles from '../css/page/addAgent.css'
import InputSubmit from './InputSubmit'
import CaughtAgents from './CaughtAgents'

class AddAgentComponent extends React.Component {

  render() {

    return (
      <div>
        <div className={styles.agentInput}>
          <InputSubmit label="Legg til agent" cb={(agentName) => this.props.handleAddAgent(agentName)}/>
          <div className={styles.addAgentMsg}>{this.props.message}</div>
        </div>
        <CaughtAgents agents={this.props.agents} />
      </div>
    );
  }
}

export default AddAgentComponent;
