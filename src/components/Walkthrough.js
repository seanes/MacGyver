import React, { Component } from 'react';
import styles from '../css/components/walkthrough.css';
import CSSButton from '../css/base/buttons.css'

class Walkthrough extends Component {

  render() {

    const { handleClose } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.close} onClick={() => handleClose()}>X</div>
        <h1 className={styles.title}>Bekhoff Mingle-app</h1>
        <div className={styles.content}>
          <div className={styles.subdiv}>
            <div className={styles.subtitle}>Hva er greia?</div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className={styles.subdiv}>
            <div className={styles.subtitle}>Hvordan får jeg poeng?</div>
            <div className={styles.text}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur,
            </div>
          </div>
        </div>
        <button
          className={CSSButton.success + ' ' + CSSButton.full}
          onClick={() => handleClose()}>Ok, jeg forstår!</button>
      </div>
    );
  }
}

export default Walkthrough;
