import React from 'react';
import CSSButton from '../css/base/buttons.css';
import CSSInput from '../css/base/inputs.css';
import ChevronIcon from './icons/ChevronRightIcon';

class InputSubmitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addedAgentName: '' };
  }

  handleClick() {
    this.props.cb(this.state.addedAgentName);
    this.setState({ addedAgentName: '' });
  }

  render() {
    return (
      <div>
        <label style={{color: '#fff'}}>{this.props.label}</label>
        <div className={CSSInput.inputSubmit}>
          <input
            type="text"
            value={this.state.addedAgentName}
            onChange={e => this.setState({ addedAgentName: e.target.value })}
          />
          <button
            disabled={!this.state.addedAgentName.length}
            onClick={() => this.handleClick()}
            className={CSSButton.submit}
          >
            <ChevronIcon color="#f43820" />
          </button>
        </div>
      </div>
    );
  }
}

export default InputSubmitComponent;
