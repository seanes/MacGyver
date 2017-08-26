import React from 'react';
import styles from '../css/page/addAgent.css';
import AgentIcon from './icons/AgentIcon';

class CaughtAgentsComponents extends React.Component {
  render() {

    const { agents } = this.props;

    return (
      <div className={styles.caughtAgents}>
        {agents && agents.length
          ? <div>
              <div className={styles.summary}>
                <h1>Agenter du har lagt til</h1>
                <div className={styles.agentCount}>{agents ? agents.length: 0}</div>
              </div>
              {agents.map((agent, index) => (
                  <div key={'agent-' + index} className={styles.agent}>
                    <div className={styles.agentImage}>
                      <AgentIcon color="#fff" />
                    </div>
                    <span>{agent.fullName}</span>
                  </div>
                ))}
            </div>
          : <h1>Du har ingen agenter. På tide å mingle!</h1>}
      </div>
    );
  }
}

export default CaughtAgentsComponents;
