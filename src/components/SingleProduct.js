/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useContext, createContext, useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import { ProductPageContext,CartProduectContext,ProductContxt,QuantityContext,} from '../App'
import '../style/SingleProduct.css'




function SinglePage({ id, image, title, description, price, rating, color,show,setShow}) {
    const { cartProduect, setCartProduect } = useContext(CartProduectContext)
    const { noOfClicks, setNoOfClicks } = useContext(ProductContxt);
    const [pickColor, setPickColor] = useState("black");
    const { quantity, setQuantityt } = useContext(QuantityContext);
    const [clicked, setClicked] = useState(true)
      
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
                    {clicked ? <button className='btn2'
                        onClick={() => {
                            setNoOfClicks(prev => prev + 1);
                            setClicked(false)
                            setCartProduect(prev => [...prev, [{
                                id: id,
                                image: image, title: title, price: price,
                                quantity: quantity, color: pickColor, show: show,
                            }]])
                        }}
                    >Add to Cart</button> : <button className='btn2'
                            onClick={() => {
                        }} >
                        Add to Cart</button>}
                </div>
            </div>
        </div>
    )
}
function Product() {
    const { single, setSingleProduct } = useContext(ProductPageContext)
    if (single.length === 0) {
        window.location.assign("/")
    }
    return (
        <div className='single'  >
            {single?.map((e) => <SinglePage id={e.id} image={e.image} title={e.title} 
                description={e.description} price={e.price}
                rating={e.rating} color={e.colors} c={e.quantity} 
                show={e.show} 
            />)}
        </div>
)   
}

export default Product
