import React from 'react'
import Helmet from 'react-helmet'
import styles from '../css/page/profile.css'
import CSSButton from '../css/base/buttons.css'
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { getProfile } from '../actions/';
import ProfileDetails from '../components/ProfileDetails';

class HomeView extends React.Component {

  componentDidMount() {
    this.props.dispatch(getProfile());
  }

  render () {

    const LogoutButton = withRouter(({ history }) => (
      <button
        className={CSSButton.success + ' ' + CSSButton.full}
        onClick={() => this.props.dispatch(logout(history))}>Logg ut</button>
    ));

    return (
      <div>
        <Helmet title="Profil"/>
        <ProfileDetails profile={this.props.profile}/>
        <div className={styles.logout}>
          <LogoutButton/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(mapStateToProps)(HomeView);
