/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState ,createContext} from 'react'
import { ProductContxt, CartProduectContext } from '../App'
import Cartproduct from './Cartproduct'
import '../style/Header.css' 
import '../style/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faTrash } from "@fortawesome/free-solid-svg-icons"
const Cartcontext = createContext(false)
function Cart() {
  const { noOfClicks,setNoOfClicks } = useContext(ProductContxt);
  const { cartState, setCart } = useContext(Cartcontext);
  const { cartProduect, setCartProduect } = useContext(CartProduectContext)
  let total = 0
  const price = cartProduect.map((e) => e.price)
  price.forEach(item=>total+=item)
  let style = noOfClicks?{height:'380px'}:{height:'0px'}
  return (
    cartState?<div className='cart'>
      <div className='continer'>
        <div className='cart_div'>
          <p className='cart_p1'>Your cart({noOfClicks})</p>
          <button className='cart_btn1'  onClick={()=>{setCart(false)}}>close</button>
        </div>
        {noOfClicks?null:<FontAwesomeIcon icon={faShoppingBag} className='cart_icon' />}
        <div className='cartProudect' style={style}>
          {cartProduect?.map((e) => <Cartproduct id={e.id} image={e.image} title={e.title} price={e.price} />)}
          {noOfClicks ? <FontAwesomeIcon icon={faTrash} className='cart_icon2' onClick={() => { setCartProduect([]); setNoOfClicks(0)}} />:null}
        </div>
        {noOfClicks === 0 ? <p className='cart_p2'>Your cart is embty</p> : null}
        {noOfClicks ? null : <button className='cart_btn2'>Check our site</button>}
        {noOfClicks?<p className='cart_total'>Total:${total}</p>:null}
        {noOfClicks ? <button className='cart_btn2'>Checkout</button> : null}
      </div>
      <div className='layaout' onClick={()=>{setCart(false)}}></div>
    </div>:null
  )
}
function Header() {
  const { noOfClicks, setNoOfClicks } = useContext(ProductContxt);
  const [cartState, setCart] = useState(false)
  const Header_link = [{ link: 'Weekend Boots', id: '1' },
    { link: 'Terrus Clogs', id: '2' },
    { link: 'Accessories', id: "3" }, {link:'Values',id:'4'}, {link:'Archive Sale',id:'5'}, {link:'New',id:'6'}]
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
          {Header_link.map((e) => <p className='Header_link' key={e.id}>{ e.link}</p>)}
      </div>
        <div className='icon'>
        <span className='Header_count'>{noOfClicks}</span>
          <FontAwesomeIcon icon={faShoppingBag} onClick={()=>{setCart(true)}}  />
      </div>
      </div>
      <Cartcontext.Provider value={{cartState,setCart}}>
      <div className='image'><div>Men</div></div>
        <Cart />
      </Cartcontext.Provider>
    </>
  )
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default Header