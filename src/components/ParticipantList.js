import React from 'react';
import propTypes from 'prop-types';
import Participant from './Participant';

class ParticipantList extends React.Component {

  static propTypes = {
    participants: propTypes.array.isRequired,
  };

  render() {

    const { participants } = this.props;

    return (
      <div>
        { participants.length ? participants.map( (participant, index) => (
          <Participant data={participant} key={"participant-" + index}/>
        ))
          : <span>No participants found</span>
        }
      </div>
    )
  }
}

export default ParticipantList;