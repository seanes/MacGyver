import React from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'
import CSSButton from '../css/base/buttons.css'
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/sessionActions';

class LogoutButtonComponent extends React.Component {
  render () {
    const LogoutButton = withRouter(({ history }) => (
      <button
        className={CSSButton.success + ' ' + CSSButton.full}
        onClick={() => logout(history)}>Logg ut</button>
    ));

    return (
      <LogoutButton />
    )
  }
}

export default () => {
  return (
    <div>
      <Helmet title="Profil"/>
      <LogoutButtonComponent />
    </div>
  );
}
