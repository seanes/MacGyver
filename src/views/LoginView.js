import React from 'react';
import Helmet from 'react-helmet';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from '../components/Input';
import { bindActionCreators } from 'redux';
import { login } from '../actions/sessionActions';
import CSSLogin from '../css/page/login.css';
import SVGChevron from '../icons/right-arrow.svg';

class LoginView extends React.Component {

  static propTypes = {
    login: propTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        username: '',
        password: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(history) {
    const { user } = this.state;
    const { login } = this.props;
    login(user, history).catch(data => this.handleLoginError(data));
  }

  handleLoginError(data) {
    if (data.response == null) {
      alert('Ukjent feil har oppstått');
      return
    }

    if (data.response.status == 401 ||data.response.status == 403) {
      alert('Brukernavn eller passord er feil')
    }
  }

  handleChange(e) {
    const { value, name } = e.target;
    const { user } = this.state;
    user[name] = value;
    this.setState({ user });
  }

  render() {

    const { user: { email, password } } = this.state;

    const SubmitButton = withRouter(({ history }) => (
      <div
        onClick={() => this.handleSubmit(history)}
        type="submit"
        className={CSSLogin.submit}><img src={SVGChevron} />
      </div>
    ));

    return (
      <div className={CSSLogin.login}>
        <Input
          name="username"
          value={email}
          label="Username"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          value={password}
          label="Password"
          type="password"
          onChange={this.handleChange}
        />
        <SubmitButton />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginView);
