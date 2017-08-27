import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../css/components/tag.css';
import { clickProfileTag } from '../actions/tags';

class ProfileTag extends React.Component {

  handleClick() {
    this.props.dispatch(clickProfileTag(this.props.text));
    this.props.history.push(`/participants`);
  }

  render () {
    return (
      <div className={styles.tag} onClick={() => this.handleClick()}>{this.props.text}</div>
    )
  }
}

const mapStateToProps = state => ({
  activeTags: state.tags.active
});

export default withRouter(connect(mapStateToProps)(ProfileTag));
