import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, value, label, type, onChange }) => (
  <div>
    {label && <label>{label}</label>}
    <div>
      <input {...{ name, value, type, onChange }}/>
    </div>
  </div>
);

const { string, func } = PropTypes;

Input.propTypes = {
  name: string.isRequired,
  value: string,
  label: string,
  type: string,
  onChange: func.isRequired
};

export default Input;