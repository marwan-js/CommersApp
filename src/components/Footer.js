/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/Footer.css'
function Footer() {
return (
    <div className='footer'>
        <div className='col_1 col'>
            <img width='100%' src='https://cdn.shopify.com/s/files/1/0665/2889/files/Thesus_A_W_Wordmark_White_400x.png?v=1635168580' />
            <p>&copy;2021 Thesus</p>
        </div>
        <div className='col_2 col'>
            <h1>Our Shop</h1>
            <a>The Weekend Boot Z</a>
            <a>The Weekend </a>
            <a>The Weekend Boot Y</a>
            <a>The Weekend Boot T</a>
        </div>
        <div className='col_3 col'>
            <h1>Help</h1>
            <a>Size Guides</a>
            <a>Shipping Information</a>
            <a>Refund Policy</a>
            <a>Wear, Care and FAQ</a>
        </div>
        <div className='col_4 col'>
            <h1>About Us</h1>
            <a>Values</a>
            <a>Terms of Service</a>
            <a>Contact Us</a>
            <a>We're</a>
        </div>
        <div className='col_5 col'>
            <h1>Get In Touch</h1>
            <p>Get In TouchCall us at 1 - 800 - 475 - 6479 or {<br/>}  email {<br/>} marwanamgad19@gmail.com</p>

        </div>
    </div>
)
}

export default Footer