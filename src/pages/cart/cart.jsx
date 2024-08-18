import React, { useContext, useState } from 'react'

import {PRODUCT} from '../../product'



import { ShopContext } from '../../context/shop-context'

import {CartItem}from './cart-item'

import './cart.css'
import { CartItems } from './cart-item'
import { Product } from '../shop/product'

import '../shop/shop'
import {useNavigate} from 'react-router-dom'


export const Cart = () => {
  const {cartItems,getTotalAmount}=useContext(ShopContext);
  const totalAmount=getTotalAmount();
  const navigate=useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>You Cart Items</h1>
      </div>
      {/* <div className="cartItems">
        {PRODUCT.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem  data={product} />
          }
        })}

      </div> */}
      <div className='cartItems'>
        {
          PRODUCT.map((product)=>{
            if(cartItems[product.id]!==0){
              return <CartItem data={product} />
            }
          })
        }
      
      </div>
        {totalAmount>0?(
      <div className="checkout">

        <p>SubTotal : Rs{totalAmount}</p>

        <button onClick={()=>navigate("/")}>Continue Shopping</button>

        <button>Checkout</button>

      </div>
      ):
      <h1>Your Cart is Empty</h1>
      }
    </div>
  )
}
