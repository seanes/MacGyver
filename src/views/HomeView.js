import React from 'react'
import Helmet from 'react-helmet'
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

          <div className={styles.logout}>
            <LogoutButton/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(HomeView);
