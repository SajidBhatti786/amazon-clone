import React from 'react';
import './Product.css';
function Product(props) {
  console.log(props)
  return (
    <div className='product'>
    <div className='product__info'>
        <p>{props.title}</p>
     <p className='product__price'>
      <small>$</small>
      <strong>{props.price }</strong>
     </p>
     <div className='product__rating'>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
     </div>
      </div>
      <img src={props.imgUrl} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
