import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h1>Ooops ... page not found</h1>
      <Link to='/'>Back to home</Link>
    </div>
  );
}