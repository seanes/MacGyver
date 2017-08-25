import React from 'react';
import Tag from '../components/Tag'
import styles from '../css/page/profile.css'
import NoImage from '../images/no_image.png';


class ProfileDetails extends React.Component {

  render() {

    const { profile } = this.props;

    if (!profile) return null;

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
        <div className={styles.description}>
          {profile.description}
        </div>
        <div className={styles.tagCloud}>
          {profile.tags.map( (tag, index) => (
            <Tag key={'tag-'+index}text={tag} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileDetails;