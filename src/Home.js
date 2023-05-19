import React from 'react';
import Product from './Product';
import './Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img classsName='home__image' style={{ objectFit: 'cover;' ,  width: '100%'}}  src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg' />
      </div>
      <div className='home__row'>
        <Product />
      </div>
    </div>
    
  );
}

export default Home;
