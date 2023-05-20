import React from 'react';
import Product from './Product';
import './Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' style={{ objectFit: 'cover;' ,  width: '100%'}}  src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg' />
        <div className='home__row'>
          <Product
            imgUrl="https://m.media-amazon.com/images/I/5194ncpe5IL._AC_UY218_.jpg"
          />
          <Product
            imgUrl="https://m.media-amazon.com/images/I/61Y1P6uIRFL._AC_UL400_.jpg"
          />
        </div>
        <div className='home__row'>
          <Product
            imgUrl='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL400_.jpg'
          />
          <Product
            imgUrl='https://m.media-amazon.com/images/I/61YXnbbNrgL._AC_UL400_.jpg'
          />
          <Product
            imgUrl='https://m.media-amazon.com/images/I/51HhyUqXImL._AC_UL400_.jpg'
          />
        </div>
      </div>
    </div>
    
  );
}

export default Home;
