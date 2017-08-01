import React from 'react'
import {withRouter} from "react-router-dom"
import styles from '../css/components/tabbar.css'

// Import icons
import SVGProfile from '../icons/user.svg'
import SVGParticipants from '../icons/team.svg'
import SVGAgent from '../icons/spy.svg'
import SVGTrophy from '../icons/trophy.svg'

const LINK_HOME = 'home'
const LINK_PARTICIPANTS = 'participants'
const LINK_ADD = 'add'
const LINK_SCOREBOARD = 'score'

const ICON_BASE_URL = '../icons/'

class TabBarComponent extends React.Component {
  handleClick (target) {
    this.props.history.push(`/${target}`)
  };

  render() {
    return (
      <div className={styles.tabBar}>
        <div onClick={() => this.handleClick(LINK_HOME, this)}><object type="image/svg+xml" data={SVGProfile} /> Profil</div>
        <div onClick={() => this.handleClick(LINK_PARTICIPANTS, this)}><object type="image/svg+xml" data={SVGParticipants} />Deltakere</div>
        <div onClick={() => this.handleClick(LINK_ADD, this)}><object type="image/svg+xml" data={SVGAgent} />Legg til agent</div>
        <div onClick={() => this.handleClick(LINK_SCOREBOARD, this)}><object type="image/svg+xml" data={SVGTrophy} />Resultater</div>
      </div>
    );
  }
};

export default withRouter(TabBarComponent);
