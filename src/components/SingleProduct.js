/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useContext, createContext, useEffect,} from 'react'
import { NavLink} from 'react-router-dom'
import { ProductPageContext,CartProduectContext,ProductContxt,QuantityContext} from '../App'
import '../style/SingleProduct.css'



function SinglePage({ id, image, title, description, price, rating, color,c}) {
    const { cartProduect, setCartProduect } = useContext(CartProduectContext)
    const { noOfClicks, setNoOfClicks } = useContext(ProductContxt);
    const [pickColor, setPickColor] = useState("black");
    const [count, setCount] = useState(0)
    const {quantity,setQuantityt} =useContext(QuantityContext)
    return (
        <div key={id} className="single-container" >
            <div className='img-div'>
                <img src={image} />
                <span className='color' style={{backgroundColor:pickColor}}></span>
            </div>
            <div className='info-div'>
                <h1>✨{title}</h1>
                <p className='price'>${price}</p>
                <p className='description'>{description}</p>
                <span className='rate'>{rating.rate}</span>
                <span className='count'>{rating.count} reviews</span>
                <p className='opti'>Colors</p>
                <div className='pick'>
                    {color.map(e => <p id='pickcolor' className='PickColor'
                    style={{
                        backgroundColor: e,
                    }}
                        onClick={() => {
                        setPickColor(e)
                    }}
                ></p>
                    )}</div>
                <div className='end-div'> 
                    <div className='countcontiner'>
                        <span onClick={()=>setQuantityt(count => count+1)} className='increase'>+</span>
                        <span className='count'>{quantity}</span>
                        <span onClick={() => setQuantityt(count => {
                            if (count > 1) {
                                return count - 1
                            }
                            else {
                            return 1
                        }}
                        )} className='decrease'>-</span>
                    </div>
                    <button className='btn2'
                        onClick={() => {
                        setNoOfClicks(prev => prev + 1);
                        setCartProduect
                            (prev => [...prev,{
                                id: id,
                                image: image, title: title,
                                price: price, quantity: quantity,color:pickColor
                            }])
                    }}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
function Product({seQuantityt}) {
    const { single, setSingleProduct } = useContext(ProductPageContext)
    if (single.length === 0) {
        window.location.assign("/")
    }
    return (
        <div className='single'  >
            {single?.map((e) => <SinglePage id={e.id} image={e.image} title={e.title} 
                description={e.description} price={e.price}
                rating={e.rating} color={e.colors} c={e.quantity}
            />)}
        </div>
)   
}

export default Product
