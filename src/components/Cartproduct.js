/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
function Cartproduct({ id, image, title, price }) {
    return (
        <div key={id} className="cartProudect_dev">
            <img src={image} width="120px" />
            <div className='info'>
                <h3 className='cartProudect_h3'>{title}</h3>
                <p className='cartProudect_p'>${price}</p>
            </div>
        </div>
    )
}

export default Cartproduct