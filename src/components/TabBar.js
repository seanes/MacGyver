import React from 'react'
import {withRouter} from "react-router-dom";
import styles from '../css/components/tabbar.css'

const LINK_HOME = 'home'
const LINK_PARTICIPANTS = 'participants'
const LINK_ADD = 'add'
const LINK_SCOREBOARD = 'score'

class TabBarComponent extends React.Component {
  handleClick (target) {
    this.props.history.push(`/${target}`)
  };

  render() {

    return (
      <div className={styles.tabBar}>
        <div onClick={() => this.handleClick(LINK_HOME, this)}>Profil</div>
        <div onClick={() => this.handleClick(LINK_PARTICIPANTS, this)}>Deltakere</div>
        <div onClick={() => this.handleClick(LINK_ADD, this)}>Legg til agent</div>
        <div onClick={() => this.handleClick(LINK_SCOREBOARD, this)}>Resultater</div>
      </div>
    );
  }
};

export default withRouter(TabBarComponent);
