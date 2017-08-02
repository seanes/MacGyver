import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../css/components/tabbar.css';
import classNames from 'classnames/bind';
import ProfilIcon from './icons/ProfilIcon';
import ParticipantsIcon from './icons/ParticipantsIcon';
import AgentIcon from './icons/AgentIcon';
import TrophyIcon from './icons/TrophyIcon';

const cx = classNames.bind(styles);
const LINK_HOME = '';
const LINK_PARTICIPANTS = 'participants';
const LINK_ADD = 'add';
const LINK_SCOREBOARD = 'score';

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
          <ProfilIcon isActive={activeTab === LINK_HOME}/>
          Profil
        </div>
        <div className={cx({active: activeTab === LINK_PARTICIPANTS})} onClick={() => this.handleClick(LINK_PARTICIPANTS, this)}>
          <ParticipantsIcon isActive={activeTab === LINK_PARTICIPANTS}/>Deltakere
        </div>
        <div className={cx({active: activeTab === LINK_ADD})} onClick={() => this.handleClick(LINK_ADD, this)}>
          <AgentIcon isActive={activeTab === LINK_ADD}/>Legg til agent
        </div>
        <div className={cx({active: activeTab === LINK_SCOREBOARD})} onClick={() => this.handleClick(LINK_SCOREBOARD, this)}>
          <TrophyIcon isActive={activeTab === LINK_SCOREBOARD}/>Resultater
        </div>
      </div>
    );
  }
}

export default withRouter(TabBarComponent);
