import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Image from '../Assets/Pizza.jpg';

export default function Home(props) {

  return (
    <div className='Home'>
      <img src={Image} />
      <Link to='/pizza'>Order Pizza!</Link>
    </div>
  )

}
