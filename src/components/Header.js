import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/sessionActions';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(history) {
    this.props.logout(history);
  }

  render () {

    const { authenticated, user } = this.props;
    const firstName = (user && user.profile) ? user.profile.firstName : '';

    const LogoutButton = withRouter(({ history }) => (
      <button
        onClick={() => this.handleLogout(history)}
        >Logout
      </button>
    ));

    return (
      <div>
        <h1>MacGyver</h1>
        {!authenticated
          ? <div><span>You are not logged in</span></div>
          : <div>
            <span>Welcome, { firstName }</span>
            <LogoutButton/>
            <Link to="/">Back to home</Link>
          </div>}
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default connect(null, mapDispatchToProps)(Header);