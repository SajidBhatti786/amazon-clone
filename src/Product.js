import React from 'react';
import './Product.css';
function Product(props) {
  return (
    <div className='product'>
    <div className='product__info'>
     <h3>The Lean Startup</h3>
     <p className='product__price'>
      <small>$</small>
      <strong>19.99</strong>
     </p>
     <div className='product__rating'>
          <span class="star">&#x2605;</span>
          <span class="star">&#x2605;</span>
          <span class="star">&#x2605;</span>
          <span class="star">&#x2605;</span>
          <span class="star">&#x2605;</span>          
     </div>
      </div>
      <img src={props.imgUrl} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
