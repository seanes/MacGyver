import React from 'react'

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

export default ScoreboardRowComponent;
