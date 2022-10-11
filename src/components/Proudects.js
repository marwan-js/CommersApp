/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState,useContext,createContext } from 'react'
import { ProductContxt,CartProduectContext } from '../App'
import axios from 'axios'
import '../style/Products.css'
function Proudects() {
    const [products, setProducts] = useState();
    const {  noOfClicks,setNoOfClicks } = useContext(ProductContxt);
    const {cartProduect,setCartProduect} = useContext(CartProduectContext)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => setProducts(err))
    }, [])
    const Products = products?.map((e) =>
        <div key={e.id} className='pro' >
            <img src={e.image} className='pro_image'/>
            <div className='pro_contain'>
                <span className='pro_rating'>{e.rating.rate}</span>
                <span className='pro_count'>{e.rating.count} Rating</span>
                <h3 className='pro_title'>{e.title}</h3>
                <span className='pro_price'>${e.price}</span>
                <button className='pro_btn' onClick={() => {
                    setNoOfClicks(prev => prev + 1);
                    setCartProduect(prev => [...prev,{id:e.id,image:e.image, title:e.title, price:e.price}])
                }}>Add to cart</button>
            </div>
        </div>);
return (
    <div className='products'>
        {Products}
    </div>
)
}

export default Proudects