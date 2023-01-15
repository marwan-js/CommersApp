import React, { useState, useContext } from "react";
import "../style/Cart.css";
import { ProductContxt } from "../App";

function CartProduct({
  id,
  image,
  title,
  price,
  color,
  array,
}) {
  const [count, setCount] = useState();
  const { isProductUnique, setNoOfCartItems } = useContext(ProductContxt);

  function decreaseQuantity() {
    setCount((count) => {
      if (count > 1) {
        return count - 1;
      } else {
        return 1;
      }
    });
  }

  function increaseQuantity() {
    setCount((e) => e + 1);
  }

  function deleteProduct() {
    delete isProductUnique[array];
    setNoOfCartItems((e) => e - 1);
  }

  return (
    <div key={id} className="cartProudect_dev">
      <img src={image} alt={"No"} width="40%" />
      <div className="info">
        <h3 className="cartProudect_h3">{title}</h3>
        <p className="cartProudect_p">${price}</p>
        <div className="colordiv">
          <span style={{ display: "inline", fontSize: "20px" }}>Color:</span>
          <p className="colorp" style={{ backgroundColor: color }}></p>
        </div>
        <div className="count2">
          <p style={{ cursor: "pointer" }} onClick={increaseQuantity}>
            +
          </p>
          <p>{count}</p>
          <p style={{ cursor: "pointer" }} onClick={decreaseQuantity}>
            -
          </p>
        </div>
        <p className="del" onClick={deleteProduct}>
          Delete
        </p>
      </div>
    </div>
  );
}

export default CartProduct;
