import React from 'react';
import ScoreboardRowComponent from './ScoreboardRow';
import styles from '../css/components/scoreboard.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class ScoreboardComponent extends React.Component {
  render() {
    let className = cx({
      scoreboard: true
    });

    const { highscore } = this.props;

    return (
      <div className={className}>
        {highscore.map((participant, i) =>
          <ScoreboardRowComponent key={i} participant={participant} />
        )}
      </div>
    );
  }
}

export default ScoreboardComponent;
