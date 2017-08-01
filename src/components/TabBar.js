import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../css/components/tabbar.css';
// Import icons
import SVGProfile from '../icons/user.svg';
import SVGParticipants from '../icons/team.svg';
import SVGAgent from '../icons/spy.svg';
import SVGTrophy from '../icons/trophy.svg';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const LINK_HOME = '';
const LINK_PARTICIPANTS = 'participants';
const LINK_ADD = 'add';
const LINK_SCOREBOARD = 'score';
const ICON_BASE_URL = '../icons/';


class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: LINK_HOME
    };
  }

  handleClick(target) {
    this.props.history.push(`/${target}`);
    this.setState({
      activeTab: target
    });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className={styles.tabBar}>
        <div className={cx({active: activeTab === LINK_HOME})} onClick={() => this.handleClick(LINK_HOME, this)}>
          <object type="image/svg+xml" data={SVGProfile} /> Profil
        </div>
        <div className={cx({active: activeTab === LINK_PARTICIPANTS})} onClick={() => this.handleClick(LINK_PARTICIPANTS, this)}>
          <object type="image/svg+xml" data={SVGParticipants} />Deltakere
        </div>
        <div className={cx({active: activeTab === LINK_ADD})} onClick={() => this.handleClick(LINK_ADD, this)}>
          <object type="image/svg+xml" data={SVGAgent} />Legg til agent
        </div>
        <div className={cx({active: activeTab === LINK_SCOREBOARD})} onClick={() => this.handleClick(LINK_SCOREBOARD, this)}>
          <object type="image/svg+xml" data={SVGTrophy} />Resultater
        </div>
      </div>
    );
  }
}

export default withRouter(TabBarComponent);
