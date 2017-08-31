import React from 'react';
import ProfileTag from '../components/ProfileTag';
import styles from '../css/page/profile.css'
import NoImage from '../images/no_image.png';
import AgentIcon from './icons/AgentIcon';
import loading from '../css/components/loading.css';
import LoadingSvg from '../images/loading.svg';

class ProfileDetails extends React.Component {

  render() {

    const { profile } = this.props;

    if (!profile) return (
      <div className={loading.loading}>
        <img src={LoadingSvg} />
      </div>
    );

    return (
      <div className={styles.profile}>
        <div className={styles.imageWrapper}>
          <div className={styles.image} >
            <img src={profile.image || NoImage} />
          </div>
        </div>
        <span className={styles.name}>
          {`${profile.firstName} ${profile.lastName}`}
        </span>
        <div className={styles.agentName}>
          <div style={{marginRight: 5}}>
            <AgentIcon/>
          </div>
          <span>
          {profile.agentName}
          </span>
        </div>
        <div className={styles.description}>
          {profile.description}
        </div>
        <div className={styles.tagCloud}>
          {profile.tags.map( (tag, index) => (
            <ProfileTag key={'tag-'+index}text={tag} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileDetails;