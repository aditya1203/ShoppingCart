import React, { createContext, useState } from 'react'
import { PRODUCT } from '../product';

export const ShopContext=createContext(null);
// CreateContext gonna keep a track of state 
//rendring this by props

 const getDefaulsCart =()=>{
    let cart={}
    for(let i=1;i<PRODUCT.length+1;i++){
        cart[i]=0;
    }
    return cart;
 }

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItem]=useState(getDefaulsCart);

    const getTotalAmount=()=>{
        let totalAmount=0

        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=PRODUCT.find((product)=>product.id===Number(item))
                totalAmount+=cartItems[item]*itemInfo.price
            }
        }
        return totalAmount
    }

    const addItemToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const updateCartItem=(newAmount,itemId)=>{
        // setCartItem((prev)=>({...prev},[itemId]:newAmount}))
        setCartItem((prev)=>({...prev,[itemId]:newAmount}))
    }
    
    console.log(cartItems);
    const contextValue={addItemToCart,removeFromCart,cartItems,updateCartItem,getTotalAmount};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    )
}
