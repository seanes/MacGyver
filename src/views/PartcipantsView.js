import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ParticipantList from '../components/ParticipantList';

class PartcipantsView extends React.Component {
  render() {

    return (
      <div>
        <Helmet title="All partcipants"/>
        <h1>All participants</h1>
        <ParticipantList participants={this.props.participants}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participants: state.participants.data
});

export default connect(mapStateToProps)(PartcipantsView);