/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState,useContext,createContext } from 'react'
import { ProductContxt} from '../App'
import axios from 'axios'
import '../style/Products.css'
import { NavLink,Route, Routes, } from 'react-router-dom';
import { colors } from "../constants"
function Proudects() {
    const [products, setProducts] = useState();
    const { noOfClicks, setNoOfClicks,
        cartProduect, setCartProduect,
        single, setSingleProduct,
        quantity, setQuantityt,
        cartState, setCart,
        unique, setUnique,
        url, setUrl} = useContext(ProductContxt);
    const [show, setShow] = useState(true)
    setNoOfClicks(unique.length)
    console.log(url)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => setProducts())
    }, [])
    const Products = products?.map((e) =>
        <div key={e.id} className='pro' onMouseEnter={()=>{setUrl(e.id)}}>
            <NavLink to={`/pro/${url}`} style={{
                textDecoration: 'none',
                color: 'black',
            }}>
                <img src={e.image} className='pro_image'
                    onClick={() => {
                        setSingleProduct(prev => [{
                            id: e.id,
                            image: e.image, description: e.description,
                            rating: e.rating, title: e.title, price: e.price,
                            colors, quantity: quantity, show: show
                        }])
                        setCartProduect(unique)
                        setQuantityt(1)
                    }} />
            </NavLink>
            <div className='pro_contain'>
                <span className='pro_rating'>{e.rating.rate}</span>
                <span className='pro_count'>{e.rating.count} Rating</span>
                <h3 className='pro_title'>{e.title}</h3>
                <span className='pro_price'>${e.price}</span>
                <NavLink to={`/pro/${url}`} style={{
                    textDecoration: 'none',
                    color: 'black',
                }}>
                    <button className='pro_btn' onClick={() => {
                        setSingleProduct(prev => [{
                            id: e.id,
                            image: e.image, description: e.description,
                            rating: e.rating, title: e.title, price: e.price,
                            colors, quantity: quantity, show: show
                        }])
                        setCartProduect(unique)
                        setQuantityt(1)
                    }}>Go to product</button>
                </NavLink>
                <button className='pro_btn' onClick={() => {
                        setCartProduect((prev) =>[...prev,{
                            id: e.id,
                            image: e.image, description: e.description,
                            rating: e.rating, title: e.title, price: e.price,
                            colors, quantity: quantity, show: show 
                        }])
                    setQuantityt(1)
                    }}>Add to cart</button>
            </div>
        </div>)
return (
    <div className='products'>
        {products ? Products :
            <div className='loading'>loading
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
            </div>}
    </div>
)
}

export default Proudects
