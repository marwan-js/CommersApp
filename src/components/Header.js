/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState ,createContext, useEffect} from 'react'
import { ProductContxt, CartProduectContext,QuantityContext,Cartcontext } from '../App'
import Cartproduct from './Cartproduct'
import '../style/Header.css' 
import '../style/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faTrash } from "@fortawesome/free-solid-svg-icons"
import { NavLink, Route, Routes } from 'react-router-dom'
import {Header_link} from "../constants"
function Cart() {
  const { noOfClicks,setNoOfClicks } = useContext(ProductContxt);
  const { cartState, setCart } = useContext(Cartcontext);
  const { cartProduect, setCartProduect } = useContext(CartProduectContext)
  let total = 0
  const price = cartProduect.map((e) =>e.map((i)=>i.price))
  price.map(e=>e.forEach(item=>total+=item))
  let style = noOfClicks ? { height: '380px' } : { height: '0px' }

  console.log(cartProduect)
  return (
    cartState?<div className='cart'>
      <div className='continer'>
        <div className='cart_div'>
          <p className='cart_p1'>Your cart({noOfClicks})</p>
          <button className='cart_btn1'  onClick={()=>{setCart(false)}}>close</button>
        </div>
        {noOfClicks?null:<FontAwesomeIcon icon={faShoppingBag} className='cart_icon' />}
        <div className='cartProudect' style={style}>
          {cartProduect?.map((i) => 
            i.map((w) => <Cartproduct
              id={w.id} image={w.image} title={w.title} price={w.price}
              quantity={w.quantity} color={w.color}
              array={i} smallArray={w} />)
          )}
        </div>
        {noOfClicks ? <FontAwesomeIcon icon={faTrash} className='cart_icon2'
            onClick={() => { setCartProduect([]); setNoOfClicks(0) }} /> : null}
        {noOfClicks === 0 ? <p className='cart_p2'>Your cart is embty</p> : null}
        {noOfClicks ? null : <button className='cart_btn2'>Check our site</button>}
        {noOfClicks?<p className='cart_total'>Your Total Price Is:${total}</p>:null}
        {noOfClicks ? <button className='cart_btn2'>Checkout</button> : null}
      </div>
      <div className='layaout' onClick={()=>{setCart(false)}}></div>
    </div>:null
  )
}
function Header() {
  const { noOfClicks, setNoOfClicks } = useContext(ProductContxt);
  const { cartState, setCart } = useContext(Cartcontext);
  return (
    <>
    <div className='mainhead' >
      <p>Free shipping + exchanges over $100.</p>
    </div>
    <div className='header'>
      <div className='logo'>
        <img
            src='https://cdn.shopify.com/s/files/1/0665/2889/files/Thesus_A_W_Wordmark_Forest_Green_2cca776c-1727-4416-868a-fa72e7359f08.png?v=1635783797'
            style={{ width: '200px' }}
        />
        </div>
      <div className='links' >
          {Header_link.map((e) => <NavLink style={{
            textDecoration: 'none',
            color:'black',
          }} to={e.herf}><p className='Header_link' key={e.id}>{e.link}</p></NavLink>)}
      </div>
        <div className='icon'>
        <span className='Header_count'>{noOfClicks}</span>
          <FontAwesomeIcon icon={faShoppingBag} onClick={()=>{setCart(true)}}  />
      </div>
      </div>
        <Routes><Route path='/' element={<div className='image'><div>Men</div></div>} /></Routes>
        <Cart />
    </>
  )
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default Header