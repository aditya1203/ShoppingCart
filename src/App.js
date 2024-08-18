import './App.css';

//setting up routes by importing react-router-dom
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
// Creating Two folder 
// 1->Pages for shoppping and cart
// 2-> Components uses many diffrent part of website

//importing Navbar from components

import { Navbar } from './components/navbar';

import {Shop} from './pages/shop/shop'

import {Cart} from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';



function App(){
  return <div className="App">
    {/* Defining router to define router routes should be there to deefine it  */}
    <ShopContextProvider>
    <Router>
      <Navbar />
      
      <Routes>
        {/* Initially we need 2 route first for shop and another for cart  first for home and second for cart*/}
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>
}

export default App;
