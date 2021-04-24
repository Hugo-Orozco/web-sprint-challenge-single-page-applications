import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav(props) {

  return (
    <nav className='Nav'>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
    </nav>
  )

}
