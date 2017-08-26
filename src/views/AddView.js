import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import AddAgentComponent from '../components/AddAgent';
import { getAgentsCaught, addAgent } from '../actions/partcipants';
import {  getProfile } from '../actions/user';

class AddView extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAgentsCaught());

    if (!this.props.profile) {
      this.props.dispatch(getProfile());
    }
  }

  handleAddAgent(agentName) {
    this.props.dispatch(addAgent(agentName));
  }

  render() {
    return (
      <div>
        <Helmet title="Add agent" />
        <AddAgentComponent
          message={this.props.message}
          profile={this.props.profile}
          agents={this.props.agents}
          handleAddAgent={this.handleAddAgent.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  agents: state.participants.agents.data,
  message: state.participants.agents.message,
  profile: state.user.profile
});

export default connect(mapStateToProps)(AddView);
