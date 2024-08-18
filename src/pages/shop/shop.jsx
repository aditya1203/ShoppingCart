import React from 'react'
import { PRODUCT} from '../../product'

import {Product} from './product'

import "./shop.css"


export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Cheap & Best</h1>
        </div>
        
        <div className="shopProducts">
            {
                PRODUCT.map((product)=>(
                    <Product data={product}/>
                ))
            }
        </div>
        
    </div>
  )
}
