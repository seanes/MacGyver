import React from 'react';
import propTypes from 'prop-types';
import Participant from './Participant';
import Loading from '../images/loading.svg';
import styles from '../css/components/loading.css';


class ParticipantList extends React.Component {

  static propTypes = {
    participants: propTypes.array.isRequired,
  };

  render() {

    const { participants, isLoading } = this.props;

    if (isLoading) {
      return <div className={styles.loading}>
        <img src={Loading}/>
      </div>
    }

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
