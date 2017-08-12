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
    const { highscore } = this.props;

    return (
      <div>
        <Helmet title="Scoreboard" />
        <ScoreboardComponent highscore={highscore} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  highscore: state.highscore.data
});

export default connect(mapStateToProps)(ScoreBoardView);
