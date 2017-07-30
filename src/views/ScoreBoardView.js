import React from 'react'
import Helmet from 'react-helmet';

const mockRows = [
  {
    "rank": "1",
    "name": "Terje Lønøy",
    "score": "24"
  },
  {
    "rank": "2",
    "name": "Sean Erik Scully",
    "score": "18"
  },
  {
    "rank": "3",
    "name": "Hulk Hogan",
    "score": "9"
  }
];

class ScoreboardComponent extends React.Component {
  render() {
    return (
      <div>{this.props.participants.map((participant, i) => <ScoreboardRowComponent key={i} participant={participant} />) }</div>
    );
  }
}

class ScoreboardRowComponent extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.participant.rank}</div>
        <div>{this.props.participant.name}</div>
        <div>{this.props.participant.score}</div>
      </div>
    );
  }
}

export default () => {
  return (
    <div>
      <Helmet title="Scoreboard"/>
      <h1>Scoreboard</h1>
      <ScoreboardComponent participants={mockRows}/>
    </div>
  );
}
