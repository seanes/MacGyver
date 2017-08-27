import React from 'react';
import propTypes from 'prop-types';
import Tag from './Tag';
import CSSParticipant from '../css/components/participant.css';
import NoImage from '../images/no_image.png';
import { connect } from 'react-redux';

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

    const { activeTags, data, anchorEl, handleShowImage } = this.props;
    const { firstName, lastName, description, image, tags } = data;

    let allTagsAreFound = true;
    activeTags.forEach( tag => {
      if (tags.indexOf(tag) === -1) allTagsAreFound = false;
    });

    if (!allTagsAreFound) return null;

    const id = 'anchor-' + anchorEl || 'ignore';

    return (
      <div id={id}>
        <div className={CSSParticipant.participant}>
          <img onClick={() => handleShowImage(image || NoImage)} src={image || NoImage} className={CSSParticipant.image}/>
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

const mapStateToProps = state => ({
  activeTags: state.tags.active
});

export default connect(mapStateToProps)(Participant);
