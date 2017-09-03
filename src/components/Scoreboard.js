import React from 'react';
import ScoreboardRowComponent from './ScoreboardRow';
import styles from '../css/components/scoreboard.css';
import classNames from 'classnames/bind';
import chevron from '../images/chevron.svg';

let cx = classNames.bind(styles);

class ScoreboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  render() {
    let className = cx({
      scoreboard: true
    });

    const { highscore, myName } = this.props;
    const { showAll } = this.state;

    return (
      <div className={className}>
        {highscore
          .slice(0, showAll ? highscore.length : 10)
          .map((participant, i) =>
            <ScoreboardRowComponent key={i} participant={participant} myName={myName}/>
          )}
        <div
          style={{
            padding: 10,
            marginTop: 5,
            fontWeight: 600,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => this.setState({showAll: !showAll})}
        >
          <div>{showAll ? 'Vis færre' : 'Vis alle'}</div>
          <img
            src={chevron}
            style={{
              width: 15,
              height: 15,
              transform: showAll ? 'rotateX(180deg)' : 'none',
              marginLeft: 5
            }}
          />
        </div>

      </div>
    );
  }
}

export default ScoreboardComponent;
