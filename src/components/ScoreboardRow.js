import React from 'react'
import styles from '../css/components/scoreboard.css'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class ScoreboardRowComponent extends React.Component {
  render() {
    let rowClassName = cx({
          scoreboardRow: true,
          first: this.props.participant.rank == "1"
    });

    let rankClassName = cx({
          rank: true
    });

    let nameClassName = cx({
          name: true
    });

    let scoreClassName = cx({
          score: true
    });

    return (
      <div className={rowClassName}>
        <div className={rankClassName}>{this.props.participant.rank}</div>
        <div className={nameClassName}>{this.props.participant.name}</div>
        <div className={scoreClassName}>{this.props.participant.score}</div>
      </div>
    );
  }
}

export default ScoreboardRowComponent;
