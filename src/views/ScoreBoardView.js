import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ScoreboardComponent from '../components/Scoreboard';
import { getHighscore } from '../actions/partcipants';

class ScoreBoardView extends React.Component {

  componentWillMount() {
    this.startPolling();
  }

  componentDidMount() {
    this.props.dispatch(getHighscore());
  }

  componentWillReceiveProps(nextProps) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.startPolling();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  startPolling = () => {
    this.timeout = setTimeout(() => {
      this.props.dispatch(getHighscore());
    }, 5000);
  };

  render() {
    const { highscore, myScore } = this.props;

    if (highscore && !highscore.length) return null;

    return (
      <div>
        <Helmet title="Scoreboard" />
        { (myScore !== null) &&
          <div style={{padding: 10, fontSize: '1em', background: '#f43820', color: '#fff', fontWeight: 600}}>
            Du har {myScore} poeng
          </div>
        }
        <ScoreboardComponent highscore={highscore} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  highscore: state.highscore.data,
  myScore: state.highscore.myScore
});

export default connect(mapStateToProps)(ScoreBoardView);
