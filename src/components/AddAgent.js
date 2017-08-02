import React from 'react'
import styles from '../css/page/addAgent.css'
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom'
import InputSubmit from './InputSubmit'

let cx = classNames.bind(styles);

class AddAgentComponent extends React.Component {
  handleSubmit (agentName) {
    console.log(agentName)
  }

  render() {
    return (
      <div className={styles.addAgent}>
        <InputSubmit label="Legg til agent" cb={(agentName) => this.handleSubmit(agentName)}/>
      </div>
    );
  }
}

export default AddAgentComponent;
