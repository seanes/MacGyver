import React from 'react';
import propTypes from 'prop-types';
import Tag from './Tag';
import CSSParticipant from '../css/components/participant.css'
import Image from '../kjekk_kar.jpg'

class Participant extends React.Component {

  static propTypes = {
    data: propTypes.shape({
      firstName: propTypes.string.isRequired,
      lastName: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      image: propTypes.string,
      tags: propTypes.arrayOf(propTypes.string).isRequired
    }),
  };

  render() {

    const { firstName, lastName, description, image, tags } = this.props.data;

    return (
      <div>
        <div className={CSSParticipant.participant}>
          <img src={Image} className={CSSParticipant.image}/>

          <div className={CSSParticipant.nameBlock}>
            <span className={CSSParticipant.name}>{firstName} {lastName}</span>
            <span className={CSSParticipant.description}>{description}</span>
            {tags.map((key) => <Tag text={key} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Participant;
