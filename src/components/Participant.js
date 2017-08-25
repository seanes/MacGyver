import React from 'react';
import propTypes from 'prop-types';
import Tag from './Tag';
import CSSParticipant from '../css/components/participant.css';
import NoImage from '../images/no_image.png';

class Participant extends React.Component {

  static propTypes = {
    data: propTypes.shape({
      firstName: propTypes.string.isRequired,
      lastName: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      img: propTypes.string,
      tags: propTypes.arrayOf(propTypes.string).isRequired
    }),
  };

  render() {

    const { firstName, lastName, description, image, tags } = this.props.data;

    return (
      <div>
        <div className={CSSParticipant.participant}>
          <img src={image || NoImage} className={CSSParticipant.image}/>
          <div className={CSSParticipant.nameBlock}>
            <span className={CSSParticipant.name}>{firstName} {lastName}</span>
            <span className={CSSParticipant.description}>{description}</span>
          </div>
        </div>
        <div className={CSSParticipant.taglist}>
          {tags.map((key) => <Tag key={key} text={key} />)}
        </div>
      </div>
    )
  }
}

export default Participant;
