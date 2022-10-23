/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/Footer.css'
import '../constants'
import { aboutus, getintouch, help, ourshop } from '../constants'
const sec_ourshop = ['The Weekend Boot Z', 'The Weekend ', 'The Weekend Boot Y', 'The Weekend Boot T']
const sec_help=['Size Guides','Shipping Information ','Refund Policy','Wear, Care and FAQ']
const sec_aboutus=['Values','Terms of Service ','Contact Us','We are the pest']
function Footer() {
return (
    <div className='footer'>
        <div className='col_1 col'>
            <img width='100%' src='https://cdn.shopify.com/s/files/1/0665/2889/files/Thesus_A_W_Wordmark_White_400x.png?v=1635168580' />
            <p>&copy;2021 Thesus</p>
        </div>
        <div className='col_2 col'>
            <h1>{ourshop }</h1>
            {sec_ourshop.map(e => <a>{e}</a>)}
        </div>
        <div className='col_3 col'>
            <h1>{ help}</h1>
            {sec_help.map(e => <a>{e}</a>)}
        </div>
        <div className='col_4 col'>
            <h1>{aboutus }</h1>
            {sec_aboutus.map(e => <a>{e}</a>)}
        </div>
        <div className='col_5 col'>
            <h1>{getintouch }</h1>
            <p>Get In TouchCall us at 1 - 800 - 475 - 6479 or {<br/>}  email {<br/>} marwanamgad19@gmail.com</p>

        </div>
    </div>
)
}

export default Footer