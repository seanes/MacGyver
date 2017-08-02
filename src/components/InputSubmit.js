import SVGChevron from '../icons/right-arrow.svg'
import React from 'react'
import CSSButton from '../css/base/buttons.css'
import CSSInput from '../css/base/inputs.css'
import classNames from 'classnames/bind';
import ChevronIcon from './icons/ChevronRightIcon'

class InputSubmitComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {addedAgentName: ""}
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <div className={CSSInput.inputSubmit}>
          <input type="text" value={this.state.addedAgentName} onChange={(e) => this.setState({addedAgentName: e.target.value})}/>
          <button
            onClick={() => this.props.cb(this.state.addedAgentName)}
            className={CSSButton.submit}><ChevronIcon color="#f43820"/>
          </button>
        </div>
      </div>
    );
  }
}

export default InputSubmitComponent;
