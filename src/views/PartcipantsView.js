import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ParticipantList from '../components/ParticipantList';
import { getParticipants, removeAllFilters } from '../actions/partcipants';

class PartcipantsView extends React.Component {
  componentDidMount() {
    if (!this.props.participants.length) {
      this.props.dispatch(getParticipants());
    }
  }

  handleOnLetterClick(letter) {
    const el = document.getElementById('anchor-' + letter.toLowerCase());
    if (el) {
      window.scrollTo(0, el.offsetTop - 50);
    }
  }

  handleRemoveAllFilters() {
    this.props.dispatch(removeAllFilters());
  }

  render() {
    const {
      participants,
      isLoading,
      letters,
      filteredLetters,
      filteredParticipants
    } = this.props;

    const fixedStyle = {
      display: !isLoading ? 'flex' : 'none',
      justifyContent: 'space-between',
      color: '#fff',
      borderRadius: 2,
      flex: 1,
      padding: '5px 2%',
      position: 'fixed',
      top: 0,
      width: '96%',
      background: '#f43820'
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Helmet title="All partcipants" />
        <div style={fixedStyle}>
          {letters.map(l =>
            <div
              style={{
                fontSize: '0.9em',
                opacity: filteredLetters.indexOf(l) > -1 ? 1 : 0.5
              }}
              onClick={() => this.handleOnLetterClick(l)}
              key={l}
            >
              {l}
            </div>
          )}
        </div>
        {filteredParticipants.length !== participants.length &&
          <div
            style={{
              ...fixedStyle,
              borderColor: '#fff',
              top: 20,
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 5,
              borderTop: '1px solid #f8a3a3',
              alignItems: 'center'
            }}
          >
            <div style={{fontSize: '0.7em'}}>
              VISER {filteredParticipants.length} AV {participants.length}
            </div>
            <div
              style={{fontSize: '0.7em', fontWeight: 600 }}
              onClick={this.handleRemoveAllFilters.bind(this)}
            >
              FJERN FILTRE
            </div>
          </div>
        }
        <div>
          <ParticipantList isLoading={isLoading} participants={participants} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ participants }) => ({
  participants: participants.data,
  isLoading: participants.isLoading,
  letters: participants.letters,
  filteredLetters: participants.filteredLetters,
  filteredParticipants: participants.filteredParticipants
});

export default connect(mapStateToProps)(PartcipantsView);
