import React, { useState, useContext, useEffect } from "react";
import { ProductContxt } from "../App";
import "../style/SingleProduct.css";
import { colors } from "../constants";

function Product() {
  const {
    setNoOfCartItems,
    isProductUnique,
    products,
    url,
    setCartProduct,
    setNum
  } = useContext(ProductContxt);
  const [count, setCount] = useState(1)



  const [pickColor, setPickColor] = useState("black");
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    setNoOfCartItems(isProductUnique.length);
  }, [isProductUnique.length, setNoOfCartItems]);



  function increase() {
    setCount(e=>e+1)
  }

  function decrease() {
    setCount(e => {
      if (e>1) {
        return e-1
      } else {
        window.alert("You cant' make the quantity 0 ")
        return 1
      }
    })
  }

  function addProducTtoCart() {
    setCartProduct((prev) => [
      ...prev,
      {
        id: products[url ? url - 1 : 1].id,
        image: products[url ? url - 1 : 1].image,
        title: products[url ? url - 1 : 1].title,
        price: products[url ? url - 1 : 1].price,
        quantity: count,
        color: pickColor,
      },
    ]);
    setNoOfCartItems(isProductUnique.length);
    setNum(count)
  }



  return (
    <div className="single">
      <div key={products[url ? url - 1 : 1].id} className="single-container"
        onMouseEnter={() => {
          setCartProduct(isProductUnique);
        }}
      >
        <div className="img-div">
          <span className="color" style={{ backgroundColor: pickColor }}></span>
          <img src={products[url ? url - 1 : 1].image} alt="no" />
        </div>
        <div className="info-div">
          <h1>✨{products[url ? url - 1 : 1].title}</h1>
          <p className="price">${products[url ? url - 1 : 1].price}</p>
          <p className="description">
            {products[url ? url - 1 : 1].description}
          </p>
          <span className="rate">
            {products[url ? url - 1 : 1].rating.rate}
          </span>
          <span className="count">
            {products[url ? url - 1 : 1].rating.count} reviews
          </span>
          <p className="opti">Colors</p>
          <div className="pick">
            {colors.map((color) => (
              <p
                id="pickcolor"
                className="PickColor"
                style={{
                  backgroundColor: color,
                }}
                onClick={() => {
                  setPickColor(color);
                }}
              ></p>
            ))}
          </div>
          <div className="end-div">
            <div className="countcontiner">
              <span onClick={increase} className="increase">
                +
              </span>
              <span className="count">{count}</span>
              <span onClick={decrease} className="decrease">
                -
              </span>
            </div>
            <button
              className="btn2"
              onClick={() => {
                addProducTtoCart();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
