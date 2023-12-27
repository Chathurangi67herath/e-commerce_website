import React from 'react';
import {PRODUCTS} from "../../products";
import {Product} from "./product";
import './shop.css';

function Shop() {
  return ( 
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Chathu Shopping</h1>
        </div>
      <div className='products'> {PRODUCTS.map((product)=> (<Product data={product}></Product>))}</div>
    </div>
  )
}

export default Shop;

