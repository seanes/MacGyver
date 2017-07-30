import React from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'


export default () => {

  return (
    <div>
      <Helmet title='Home' />
      <h1>Home</h1>
      <ul>
        <li>
          <Link to='add'>Add agent</Link>
        </li>
        <li>
          <Link to='partcipants'>Particpants</Link>
        </li>
        <li>
          <Link to='score'>Scoreboard</Link>
        </li>
      </ul>
    </div>
  );
}