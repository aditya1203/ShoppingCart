import React ,{useContext}from 'react'

import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {
    const {id,productName,price,productImage}=props.data;
//   const {cartItems,addCartItem}=useContext(ShopContext);
  const {addItemToCart,cartItems,removeFromCart,updateCartItem}=useContext(ShopContext)
  const cartItemAmount=cartItems[id];


  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>
                ₹{price}
            </p>
            <div className="countHandler">
            <button className='remove' onClick={()=>removeFromCart(id)} disabled={cartItemAmount===0}>   
            -
            </button>
            <input type="text" value={cartItems[id]} onChange={(e)=>updateCartItem(Number(e.target.value),id)} />
            <button onClick={()=>addItemToCart(id)}>+
            {cartItemAmount> 0 &&
                <>
                {cartItemAmount}
                </>
            } 
            </button>
            </div>
        </div>
        
    </div>
  )
}
