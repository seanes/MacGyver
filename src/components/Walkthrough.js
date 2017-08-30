import React, { Component } from 'react';
import styles from '../css/components/walkthrough.css';
import CSSButton from '../css/base/buttons.css'

class Walkthrough extends Component {

  render() {

    const { handleClose } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.close} onClick={() => handleClose()}>X</div>
        <h1 className={styles.title}>Bekhoffs minglelek</h1>
        <div>
          <div className={styles.subdiv}>
            <div className={styles.subtitle}>Hva er greia?</div>
            <div className={styles.text}>
              Så du skal i bryllup. En haug med mennesker, med brudeparet som eneste sikre felles referansepunkt. Samtalen kan fort gå trått etter at man fastslått den andres relasjon til paret.
            </div>
            <div className={styles.text}>
              Derfor har Siriann og Karl laget profiler for alle gjestene med bilde, litt info, noen hint om gode samtaletemaer og en oversikt over hvilke interesser vi tror folk har. Klikker du på en av interessene vil du finne andre med samme interesse. Du kan markere flere interesser og dermed finne en ekte sjelefrende.
            </div>
            <div className={styles.text}>
              I tillegg er dette også et spill! Du har fått tildelt et hemmelig agentnavn. Ved å skaffe deg andres hemmelige agentnavn vil du kunne samle poeng og vinne en fantastisk premie på festen.
            </div>
          </div>
          <div className={styles.subdiv}>
            <div className={styles.subtitle}>Hvordan får jeg poeng?</div>
            <div className={styles.text}>
              <ol>
                <li><span className={styles.bold}>Grunnregel:</span> For hvert nytt agentnavn du legger til får du 10 poeng.</li>
                <li><span className={styles.bold}>Dybdebonus:</span> For hver ekstra du legger til innenfor samme interesse får du +1 poeng. Så hvis du allerede har fem agentnavn innen interessen «historie» får du 10 + 6 poeng for den neste.</li>
                <li><span className={styles.bold}>Breddebonus:</span> For hver 10ende interesse du samler får du en bonus tilsvarende det titallet du er på. Eksempelvis får du da 60 poeng når du har samlet agenter med til sammen 60 ulike typer interesser.</li>
                <li><span className={styles.bold}>Spesialagenter:</span> Syv utvalgte agenter gir langt mer enn 10 poeng. De vet ikke selv hvem de er.</li>
              </ol>
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: 20}}>
          <button
            style={{width: '100%'}}
            className={CSSButton.success + ' ' + CSSButton.full}
            onClick={() => handleClose()}>Ok, jeg forstår!</button>
        </div>
      </div>
    );
  }
}

export default Walkthrough;
