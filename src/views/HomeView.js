import React from 'react'
import Helmet from 'react-helmet'
import styles from '../css/page/profile.css'
import CSSButton from '../css/base/buttons.css'
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { getProfile } from '../actions/';
import { openWalkthrough } from '../actions/user';
import { closeWalkthrough } from '../actions/user';
import Walkthrough from '../components/Walkthrough';
import ProfileDetails from '../components/ProfileDetails';

class HomeView extends React.Component {

  componentDidMount() {
    this.props.dispatch(getProfile());
  }


  handleClose() {
    this.props.dispatch(closeWalkthrough());
  }

  render () {

    const { showWalkthrough } = this.props;

    const LogoutButton = withRouter(({ history }) => (
      <button
        className={CSSButton.success + ' ' + CSSButton.full}
        onClick={() => this.props.dispatch(logout(history))}>Logg ut</button>
    ));

    return (
      <div>
        <Helmet title="Profil"/>
        { showWalkthrough ?
          <Walkthrough handleClose={this.handleClose.bind(this)}/>
          :
          <div>
            <ProfileDetails profile={this.props.profile}/>
            <div style={{marginBottom: 8}}>
              <button
                className={CSSButton.success + ' ' + CSSButton.full}
                onClick={() => this.props.dispatch(openWalkthrough())}>Hva er greia?</button>
            </div>
            <div className={styles.logout}>
              <LogoutButton/>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile,
  showWalkthrough: state.user.showWalkthrough
});

export default connect(mapStateToProps)(HomeView);
