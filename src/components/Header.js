/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState ,createContext, useEffect} from 'react'
import { ProductContxt} from '../App'
import Cartproduct from './Cartproduct'
import '../style/Header.css' 
import '../style/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faTrash } from "@fortawesome/free-solid-svg-icons"
import { NavLink, Route, Routes } from 'react-router-dom'
import { Header_link } from "../constants"

function Cart() {
  const { noOfClicks, setNoOfClicks,
    cartProduect, setCartProduect,
    single, setSingleProduct,
    quantity, setQuantityt,
    cartState, setCart,
    unique, setUnique,
    url,setUrl} = useContext(ProductContxt);

  let total = 0
  const price = cartProduect?.map((i)=>i.price)
  price?.forEach(item=>total+=item)
  let style = noOfClicks ? { height: '380px' } : { height: '0px' }


  let uniqueProduct  = cartProduect?.map(e => e['id'])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => cartProduect[e]).map(e => cartProduect[e]);
  useEffect(() => {
    setUnique(uniqueProduct);
  }, [cartProduect])
  return (
    cartState?<div className='cart'>
      <div className='continer'>
        <div className='cart_div'>
          <p className='cart_p1'>Your cart({noOfClicks})</p>
          <button className='cart_btn1' onClick={() => {
            setCart(false)
            setCartProduect(unique)
          }}>close</button>
        </div>
        {noOfClicks?null:<FontAwesomeIcon icon={faShoppingBag} className='cart_icon' />}
        <div className='cartProudect' style={style}>
          {unique?.map((i) => 
             <Cartproduct
              id={i.id} image={i.image} title={i.title} price={i.price}
              quantity={i.quantity} color={i.color}
              array={unique.indexOf(i)} />
          )}
        </div>
        {noOfClicks ? <FontAwesomeIcon icon={faTrash} className='cart_icon2'
          onClick={() => {
            setCartProduect([]); setNoOfClicks(0)
            }} /> : null}
        {noOfClicks === 0 ? <p className='cart_p2'>Your cart is embty</p> : null}
        {noOfClicks ? null : <button className='cart_btn2'>Check our site</button>}
        {noOfClicks?<p className='cart_total'>Your Total Price Is:${total}</p>:null}
        {noOfClicks ? <button className='cart_btn2'>Checkout</button> : null}
      </div>
      <div className='layaout' onClick={() => {
        setCart(false)
        setCartProduect(unique)
      }}></div>
    </div>:null
  )
}
function Header() {
  const { noOfClicks, setNoOfClicks,
    cartProduect, setCartProduect,
    single, setSingleProduct,
    quantity, setQuantityt,
    cartState, setCart,
    unique, setUnique,
    urlId, setId } = useContext(ProductContxt);
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
        <div className='icon-div'onClick={() => {
            setCart(true)
            setCartProduect(unique)
            setNoOfClicks(unique.length)
          }}>
        <span className='Header_count'>{noOfClicks}</span>
          <FontAwesomeIcon className='icon' icon={faShoppingBag}  />
      </div>
      </div>
        <Routes><Route path='/' element={<div className='image'><div>Men</div></div>} /></Routes>
        <Cart />
    </>
  )
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default Header