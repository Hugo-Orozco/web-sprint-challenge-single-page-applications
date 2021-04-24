import React from 'react';

import './Confirmation.css';
import Image from '../Assets/Pizza.jpg';

export default function Confirmation(props) {

  const { pizza } = props;

  const { id, size, quantity, total } = pizza;

  return (
    <div className='Confirmation'>
      <img src={Image} />
      <h2>Confirmation Number: {id} Size: {size} Quantity: {quantity} Total: {total}</h2>
    </div>
  )

}
