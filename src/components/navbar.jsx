import React from 'react'
//in react-router-dom there is component called link 
import {Link} from "react-router-dom"
//Importing Cart icon from phosphor react lib
import {ShoppingCart} from "phosphor-react"

import "./navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Welcome Abroad</h2>
        <div className='links'>
            <Link to={"/"}>
                Shop
            </Link>
            <Link to={"/cart"}>
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}
