/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState,useContext,createContext } from 'react'
import { ProductContxt,CartProduectContext,ProductPageContext,QuantityContext,UniqueContext} from '../App'
import axios from 'axios'
import '../style/Products.css'
import { NavLink } from 'react-router-dom';
import {colors} from "../constants"
function Proudects() {
    const [products, setProducts] = useState();
    const { noOfClicks, setNoOfClicks } = useContext(ProductContxt);
    const { cartProduect, setCartProduect } = useContext(CartProduectContext)
    const { single, setSingleProduct } = useContext(ProductPageContext)
    const { quantity, setQuantityt } = useContext(QuantityContext)
    const [show , setShow] =useState(true)
    const {unique,setUnique} =useContext(UniqueContext)



    function getUnique(arr, index) {

        const unique = arr
             .map(e => e[index])
      
             // store the keys of the unique objects
             .map((e, i, final) => final.indexOf(e) === i && i)
        
             // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);      
      
         return unique;
      }


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => setProducts([]))
    }, [])
    const Products = products?.map((e) =>
        <div key={e.id} className='pro' >
            <NavLink to={"/pro"} style={{
            textDecoration: 'none',
            color:'black',
          }}>
                <img src={e.image} className='pro_image'
                onClick={() => {
                    setSingleProduct(prev => [{
                        id: e.id,
                        image: e.image, description: e.description,
                        rating: e.rating, title: e.title, price: e.price,
                        colors,quantity:quantity, show:show
                    }])
                    setCartProduect(unique)
                    }} />
            </NavLink>
            <div className='pro_contain'>
                <span className='pro_rating'>{e.rating.rate}</span>
                <span className='pro_count'>{e.rating.count} Rating</span>
                <h3 className='pro_title'>{e.title}</h3>
                <span className='pro_price'>${e.price}</span>
                <NavLink to={"/pro"} style={{
            textDecoration: 'none',
            color:'black',
          }}>
                <button className='pro_btn' onClick={() => {
                        setSingleProduct(prev => [{
                            id: e.id,
                            image: e.image, description: e.description,
                            rating: e.rating, title: e.title, price: e.price,
                            colors, quantity: quantity, show:show
                        }])
                        setCartProduect(unique)
                    }}>Add to cart</button>
                </NavLink>
            </div>
        </div>);
return (
    <div className='products'>
        {Products}
    </div>
)
}

export default Proudects
