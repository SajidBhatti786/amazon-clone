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
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price='19.99'
            rating={5}
          />
          <Product
            imgUrl='https://m.media-amazon.com/images/I/712cVg8XqrL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg'
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price='909.00'
            rating={4.1}
          />
        </div>
        <div className='home__row'>
          <Product
            imgUrl='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL400_.jpg'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price='14.49'
            rating={4.4}
          />
          <Product
            imgUrl='https://m.media-amazon.com/images/I/61YXnbbNrgL._AC_UL400_.jpg'
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price='6.99'
            rating={2}
          />
          <Product
            imgUrl='https://m.media-amazon.com/images/I/61XZQXFQeVL.__AC_SY445_SX342_QL70_FMwebp_.jpg'
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price='9.99'
            rating={4}
          />
        </div>
      </div>
    </div>
    
  );
}

export default Home;
