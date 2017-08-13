import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ParticipantList from '../components/ParticipantList';
import { getParticipants } from '../actions/partcipants';

class PartcipantsView extends React.Component {

  componentDidMount() {
    this.props.dispatch(getParticipants());
  }

  render() {

    return (
      <div>
        <Helmet title="All partcipants"/>
        <ParticipantList participants={this.props.participants}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participants: state.participants.data
});

export default connect(mapStateToProps)(PartcipantsView);
