import React from 'react'
import { withRouter } from 'react-router-dom';
import styles from '../css/components/tag.css'

class TagComponent extends React.Component {
  handleClick() {
    console.log(this.props.text);
    this.props.history.push(`/participants`);
  }

  render () {
    return (
      <div className={styles.tag} onClick={() => this.handleClick()}>{this.props.text}</div>
    )
  }
}

export default withRouter(TagComponent);
