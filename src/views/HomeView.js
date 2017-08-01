import React from 'react'
import Helmet from 'react-helmet'
import CSSButton from '../css/base/buttons.css'
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';

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
        <LogoutButton />
      </div>
    )
  }
}

export default connect(null)(HomeView);
