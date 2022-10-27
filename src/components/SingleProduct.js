/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useContext, createContext, useEffect,} from 'react'
import { NavLink} from 'react-router-dom'
import { ProductPageContext } from '../App'
import '../style/SingleProduct.css'
function SinglePage({ id, image, title, description, price, rating, }) {
    return (
        <div key={id} className="single-container" >
            <div className='img-div'>
                <span className='color'></span>
                <img src={image} onClick={()=>{}} />
            </div>
            <div className='info-div'>
                <h1>{title}</h1>
                <p className='description'>{description}</p>
                <p className='price'>{price}</p>
                <span className='rate'>{rating.rate}</span>
                <span className='count'>{rating.count} reviews</span>
                <div className='btns'>
                    <button className='btn2'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

function Product() {
    const { single, setSingleProduct } = useContext(ProductPageContext)
    console.log(single)
    if (single.length === 0) {
        window.location.assign("/")
    }
    return (
        <div className='single'  >
                {single?.map((e) =>  <SinglePage id={e.id} image={e.image} title={e.title} 
                    description={e.description} price={e.price} rating={e.rating}  />)}
                                <NavLink style={{ width: '40%' }} to={"/"} ><button className='btn1'
                        onClick={() => setSingleProduct([])}>Back</button></NavLink>
        </div>
)   
}

export default Product
