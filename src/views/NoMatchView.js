import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default () => {
  return (
    <div>
      <Helmet title="Page not found"/>
      <h1>Ooops ... page not found</h1>
      <Link to='/'>Back to home</Link>
    </div>
  );
}