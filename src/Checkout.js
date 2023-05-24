import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
     <div className='checkout__left'>
     <img
      className='checkout__ad'
      src='https://tpc.googlesyndication.com/simgad/8169744333071237861'
     />
     <div>
      <h2 className='checkout__title'>
       Your Shopping Basket is empty
      </h2>
     </div>
     </div>
    <div className='checkout__right'>
    <h2>subttoal will go hrere</h2>
    </div>
    </div>
  );
}

export default Checkout;
