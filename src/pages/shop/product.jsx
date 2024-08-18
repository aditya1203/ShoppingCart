import React, { useContext } from 'react'

import {ShopContext} from "../../context/shop-context"
import {ShoppingCart} from "phosphor-react"


export const Product = (props) => {
    const {id,productName,price,productImage}=props.data;

    const {addItemToCart,cartItems,removeFromCart}=useContext(ShopContext)
    const cartItemAmount=cartItems[id];
  return (
    <div className='product'>
        <img src={productImage} alt='Broken' />
        <div className='despription'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                ₹{price}
            </p>
        </div>
        <button className='addToCartBttn' >
            
            <button className='remove' onClick={()=>removeFromCart(id)} disabled={cartItemAmount===0}>   
            -
            </button>
            <ShoppingCart size={20}/>
            <button className='add' onClick={()=>addItemToCart(id)}>+
            {cartItemAmount> 0 &&
                <>
                {cartItemAmount}
                </>
            } 
            </button>
            {/* Add To Cart
            {cartItemAmount> 0 &&
                <>
                ({cartItemAmount})
                </>
            } */}

        </button>
    </div>
    
  )
}

