import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import AddAgentComponent from '../components/AddAgent';
import { getAgentsCaught, addAgent } from '../actions/partcipants';

class AddView extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAgentsCaught());
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
          agents={this.props.agents}
          handleAddAgent={this.handleAddAgent.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  agents: state.participants.agents.data,
  message: state.participants.agents.message
});

export default connect(mapStateToProps)(AddView);
