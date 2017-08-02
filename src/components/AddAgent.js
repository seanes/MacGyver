import React from 'react'
import styles from '../css/components/addAgent.css'
import CSSLogin from '../css/page/login.css'
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom'
import SubmitButton from './SubmitButton'

let cx = classNames.bind(styles);

class AddAgentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {addedAgentName: ""}
  }

  handleSubmit () {
    console.log(this.state.addedAgentName)
  }

  render() {
    return (
      <div>
        <label>Legg til agent</label>
        <input type="text" value={this.state.addedAgentName} onChange={(e) => this.setState({addedAgentName: e.target.value})}/>
        <SubmitButton cb={() => this.handleSubmit()}/>
      </div>
    );
  }
}

export default AddAgentComponent;
