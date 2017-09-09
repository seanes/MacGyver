import React from 'react';
import propTypes from 'prop-types';
import Participant from './Participant';
import Loading from '../images/loading.svg';
import styles from '../css/components/loading.css';
import Lightbox from 'react-image-lightbox';
import { connect } from 'react-redux';

class ParticipantList extends React.Component {
  static propTypes = {
    participants: propTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      image: null
    };
  }

  handleShowImage(image) {
    this.setState({
      isOpen: true,
      image: image
    });
  }

  render() {
    const { participants, isLoading, filteredParticipants, activeTags } = this.props;
    const { isOpen, image } = this.state;

    if (isLoading) {
      return (
        <div className={styles.loading}>
          <img src={Loading} />
        </div>
      );
    }

    let foundLetter = '';

    const participantList =
      filteredParticipants.length &&
      filteredParticipants.map((participant, index) => {
        const { firstName } = participant;

        const firstName1stLetter = firstName[0].toLowerCase();
        let anchorEl = null;

        if (firstName1stLetter !== foundLetter) {
          anchorEl = firstName1stLetter;
          foundLetter = firstName1stLetter;
        }

        return (
          <Participant
            handleShowImage={this.handleShowImage.bind(this)}
            anchorEl={anchorEl}
            data={participant}
            key={'participant-' + index}
          />
        );
      });

    return (
      <div style={{ paddingTop: activeTags.length ? 20 : 10 }}>
        {isOpen &&
          <Lightbox
            mainSrc={image}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />}
        {participants.length
          ? participantList
          : <span>No participants found</span>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeTags: state.participants.active,
  filteredParticipants: state.participants.filteredParticipants,
  isLoading: state.participants.isLoading
});

export default connect(mapStateToProps)(ParticipantList);
