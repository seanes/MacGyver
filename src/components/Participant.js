import React from 'react';
import propTypes from 'prop-types';

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
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{description}</span>
        <img src={image}/>
        <span>{ // create and add Tag component
          tags.join(',')
        }</span>
      </div>
    )
  }
}

export default Participant;