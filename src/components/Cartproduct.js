/* eslint-disable jsx-a11y/alt-text */
import React,{ useState } from 'react'
import "../style/Cart.css"
function Cartproduct({ id, image, title, price, quantity, color }) {
    const [count,setCount]=useState(quantity)
    return (
        <div key={id} className="cartProudect_dev">
            <img src={image} width="120px" />
            <div className='info'>
                <h3 className='cartProudect_h3'>{title}</h3>
                <p className='cartProudect_p'>${price}</p>
                <div className='colordiv'><span style={{ display: 'inline', fontSize: "20px" }} >Color:</span><p className='colorp' style={{ backgroundColor: color }}></p></div>
                <div className='count2'>
                    <p onClick={()=>{setCount(e=>e+1)}}>+</p>
                    <p>{count}</p>
                    <p onClick={() => setCount(count => {
                            if (count > 1) {
                                return count - 1
                            }
                            else {
                            return 1
                        }}
                        )}>-</p>
                </div>
            </div>
        </div>
    )
}

export default Cartproduct