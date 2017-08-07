import React from 'react';
import Tag from '../components/Tag'
import image from '../kjekk_kar.jpg';
import styles from '../css/page/profile.css'


class ProfileDetails extends React.Component {

  render() {

    const { profile } = this.props;

    if (!profile) return null;

    return (
      <div className={styles.profile}>
        <div className={styles.imageWrapper}>
          <div className={styles.image} >
            <img src={image} />
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