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

    return (
      <div className={rowClassName}>
        <div className={styles.rank}>{this.props.participant.rank}.</div>
        <div className={styles.name}>{this.props.participant.name}</div>
        <div className={styles.score}>{this.props.participant.score}</div>
      </div>
    );
  }
}

export default ScoreboardRowComponent;
