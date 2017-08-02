import SVGChevron from '../icons/right-arrow.svg'
import React from 'react'
import CSSButton from '../css/base/buttons.css'
import ChevronIcon from './icons/ChevronRightIcon'

class SubmitButtonComponent extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.cb()}
        className={CSSButton.submit}><ChevronIcon />
      </button>
    );
  }
}

export default SubmitButtonComponent;
