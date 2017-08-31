import React from 'react'
import InputSubmit from './InputSubmit';
import CaughtAgents from './CaughtAgents';
import styles from '../css/page/addAgent.css';

class AddAgentComponent extends React.Component {

  render() {

    const { myAgentName } = this.props;

    return (
      <div>
        <div className={styles.agentInput}>
          <InputSubmit label="Legg til agent" cb={(agentName) => this.props.handleAddAgent(agentName)}/>
          <div className={styles.addAgentMsg}>{this.props.message}</div>
        </div>
        <div className={styles.caughtAgents} style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{fontSize: '0.9rem'}}>Ditt agentnavn</div>
          <div style={{display: 'block', marginLeft: 10, fontSize: '0.8rem'}}>{myAgentName}</div>
        </div>
        <CaughtAgents agents={this.props.agents} />
      </div>
    );
  }
}

export default AddAgentComponent;
