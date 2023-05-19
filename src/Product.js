import React from 'react';
import './Product.css';
function Product() {
  return (
    <div className='product'>
    <div className='product__info'>
     <p>The Lean Startup</p>
     <p className='product__price'>
      <small>$</small>
      <strong>19.99</strong>
     </p>
     <div className='product__rating'>
       <span class="star">&#x2605;</span>
     </div>
      </div>
      <img src='https://m.media-amazon.com/images/I/5194ncpe5IL._AC_UY218_.jpg' />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
