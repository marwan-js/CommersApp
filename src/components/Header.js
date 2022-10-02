/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import {ProductContxt} from '../App'
import '../style/Header.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function IamgeCombonant() {
  return (
    <>
      <div className='image'><div>Men</div></div>
    </>
  )
}
function Header() {
  const {clicked, setClicked} = useContext(ProductContxt);
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
          <FontAwesomeIcon icon={faCartShopping} />
      </div>
      </div>
      <IamgeCombonant />
    </>
  )
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default Header