import React from 'react';
import Helmet from 'react-helmet';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from '../components/Input';
import { bindActionCreators } from 'redux';
import { login } from '../actions/sessionActions';


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
    login(user, history);
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
      <button
        onClick={() => this.handleSubmit(history)}
        type="submit">Submit
      </button>
    ));

    return (
      <div>
        <Helmet title="Login"/>
        <h1>Login</h1>
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