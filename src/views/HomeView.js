import React from 'react'
import Helmet from 'react-helmet'
import Tag from '../components/Tag'
import styles from '../css/page/profile.css'
import CSSButton from '../css/base/buttons.css'
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';
import image from '../kjekk_kar.jpg'

class HomeView extends React.Component {

  render () {
    const LogoutButton = withRouter(({ history }) => (
      <button
        className={CSSButton.success + ' ' + CSSButton.full}
        onClick={() => this.props.dispatch(logout(history))}>Logg ut</button>
    ));

    return (
      <div>
        <Helmet title="Profil"/>
        <div className={styles.profile}>
          <div className={styles.imageWrapper}>
            <div className={styles.image} >
              <img src={image} />
            </div>
          </div>

          <span className={styles.name}>Sean Erik Scrully</span>

          <div className={styles.description}>Sean er en godgutt av natur, det er det som gjør han så godtroende. Who woulda thunk? Ikke jeg ihvertfall, kniz!</div>

          <div className={styles.tagCloud}>
            <Tag text="Godgutt" />
            <Tag text="kramgut" />
            <Tag text="knizegutt" />
            <Tag text="morroklump" />
            <Tag text="artigper" />
            <Tag text="wannabeprogrammer" />
            <Tag text="whiggah" />
          </div>

          <div className={styles.logout}>
            <LogoutButton/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(HomeView);
