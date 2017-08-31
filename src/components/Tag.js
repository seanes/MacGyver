import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../css/components/tag.css';
import { clickTag } from '../actions/tags';

class TagComponent extends React.Component {
  handleClick() {
    this.props.dispatch(clickTag(this.props.text));
    this.props.history.push(`/participants`);
  }

  render () {

    const { text, activeTags } = this.props;

    const isActive =  activeTags.indexOf(text) > -1;

    return (
      <div className={isActive ? styles.active : styles.tag} onClick={() => this.handleClick()}>{this.props.text}</div>
    )
  }
}

const mapStateToProps = state => ({
  activeTags: state.participants.active
});

export default withRouter(connect(mapStateToProps)(TagComponent));
