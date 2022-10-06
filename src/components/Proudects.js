/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState,useContext } from 'react'
import { ProductContxt,CartProudectContext } from '../App'
import axios from 'axios'
import '../style/Products.css'
function Proudects() {
    const [products, SetData] = useState();
    const { clicked, setClicked } = useContext(ProductContxt);
    const {cartProudect,setCartProudect} = useContext(CartProudectContext)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                SetData(res.data)
            })
            .catch((err) => SetData(err))
    }, [])
    const jsx = products?.map((e) =>
        <div key={e.id} className='pro' >
            <img src={e.image} className='pro_image'/>
            <div className='pro_contain'>
                <span className='pro_rating'>{e.rating.rate}</span>
                <span className='pro_count'>{e.rating.count} Rating</span>
                <h3 className='pro_title'>{e.title}</h3>
                <span className='pro_price'>${e.price}</span>
                <button className='pro_btn' onClick={() => {
                    setClicked(prev => prev + 1);
                    setCartProudect(prev => [...prev,{id:e.id,image:e.image, title:e.title, price:e.price}])
                }}>Add to cart</button>
            </div>
        </div>);
return (
    <div className='products'>
        {jsx}
    </div>
)
}

export default Proudects