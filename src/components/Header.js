/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState ,createContext} from 'react'
import {ProductContxt,CartProudectContext} from '../App'
import '../style/Header.css' 
import '../style/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,faTrash } from "@fortawesome/free-solid-svg-icons"
const Cartcontext = createContext(false)
function Cart({value}) {
  const { clicked, setClicked } = useContext(ProductContxt);
  const { cartState, setCart } = useContext(Cartcontext);
  const { cartProudect, setCartProudect } = useContext(CartProudectContext)
  let total = 0
  const price = cartProudect.map((e) => e.price)
  price.forEach(item=>total+=item)
  let style={}
  clicked?style={height:'380px'}:style={height:'0px'}
  const Cartproudcts = cartProudect?.map((e) =>
  <div key={e.id} className="cartProudect_dev">
    <img src={e.image} width="120px"/>
    <div className='info'>
      <h3 className='cartProudect_h3'>{e.title}</h3>
      <p className='cartProudect_p'>${e.price}</p>
    </div>
  </div>
  )
  return (
    cartState?<div className='cart'>
      <div className='continer'>
        <div className='cart_div'>
          <p className='cart_p1'>Your cart({clicked})</p>
          <button className='cart_btn1'  onClick={()=>{setCart(false)}}>close</button>
        </div>
        {clicked?null:<FontAwesomeIcon icon={faShoppingBag} className='cart_icon' />}
        <div className='cartProudect' style={style}>
          {Cartproudcts}
          {clicked ? <FontAwesomeIcon icon={faTrash} className='cart_icon2' onClick={() => { setCartProudect([]); setClicked(0)}} />:null}
        </div>
        {clicked === 0 ? <p className='cart_p2'>Your cart is embty</p> : null}
        {clicked ? null : <button className='cart_btn2'>Check our site</button>}
        {clicked?<p className='cart_total'>Total:${total}</p>:null}
        {clicked ? <button className='cart_btn2'>Checkout</button> : null}
      </div>
      <div className='layaout' onClick={()=>{setCart(false)}}></div>
    </div>:null
  )
}
function IamgeCombonant() {
  return (
    <>
      <div className='image'><div>Men</div></div>
    </>
  )
}

function Header() {
  const { clicked, setClicked } = useContext(ProductContxt);
  const [cartState,setCart] =useState(false)
  return (
    <>
    <div className='header'>
      <div className='logo'>
        <img
        src='https://cdn.shopify.com/s/files/1/0665/2889/files/Thesus_A_W_Wordmark_Forest_Green_2cca776c-1727-4416-868a-fa72e7359f08.png?v=1635783797'
            style={{ width: '200px' }}
        />
        </div>
      <div className='links' >
        <p className='Header_link '>Weekend Boots</p>
        <p className='Header_link '>Terrus Clogs</p>
        <p className='Header_link '>Accessories</p>
        <p className='Header_link '>Values </p>
        <p className='Header_link '> Archive Sale</p>
      </div>
        <div className='icon'>
        <span className='Header_count'>{clicked}</span>
          <FontAwesomeIcon icon={faShoppingBag} onClick={()=>{setCart(true)}}  />
      </div>
      </div>
      <Cartcontext.Provider value={{cartState,setCart}}>
        <IamgeCombonant />
        <Cart />
      </Cartcontext.Provider>
    </>
  )
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default Header