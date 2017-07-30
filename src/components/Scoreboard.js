import React from 'react'
import ScoreboardRowComponent from './ScoreboardRow';

class ScoreboardComponent extends React.Component {
  render() {
    return (
      <div>{this.props.participants.map((participant, i) => <ScoreboardRowComponent key={i} participant={participant} />) }</div>
    );
  }
}

export default ScoreboardComponent;
