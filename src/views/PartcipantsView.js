import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ParticipantList from '../components/ParticipantList';
import { getParticipants } from '../actions/partcipants';

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

  render() {
    const { participants, isLoading } = this.props;

    const capitaLetter = [];

    if (participants) {
      participants.forEach(p => {
        let letter = p.firstName[0];
        if (capitaLetter.indexOf(letter) === -1) {
          capitaLetter.push(letter);
        }
      });
    }

    capitaLetter.sort((a, b) => a.localeCompare(b, 'nb'));

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Helmet title="All partcipants" />
        <div
          style={{
            display: !isLoading ? 'flex' : 'none',
            justifyContent: 'space-between',
            color: '#fff',
            borderRadius: 2,
            flex: 1,
            padding: '5px 2%',
            position: 'fixed',
            width: '96%',
            background: '#f43820'
          }}
        >
          {capitaLetter.map(l =>
            <div
              style={{fontSize: '0.9em'}}
              onClick={() => this.handleOnLetterClick(l)} key={l}>{l}</div>
          )}
        </div>
        <div>
          <ParticipantList isLoading={isLoading} participants={participants} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participants: state.participants.data,
  isLoading: state.participants.isLoading
});

export default connect(mapStateToProps)(PartcipantsView);
