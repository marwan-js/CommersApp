import React, { useState, useContext, useEffect } from "react";
import { ProductContxt } from "../App";
import "../style/SingleProduct.css";
import { colors } from "../constants";
import { NavLink } from "react-router-dom";

function Product() {
  const {
    setNoOfCartItems,
    isProductUnique,
    products,
    url,
    setCartProduct,
    setProducts,
  } = useContext(ProductContxt);

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    setNoOfCartItems(isProductUnique.length);
  }, [isProductUnique.length, setNoOfCartItems]);

  function addProducTtoCart() {
    setCartProduct((prev) => [
      ...prev,
      {
        id: products[url ? url - 1 : 1].id,
        image: products[url ? url - 1 : 1].image,
        title: products[url ? url - 1 : 1].title,
        price: products[url ? url - 1 : 1].price,
        quantity: products[url ? url - 1 : 1].quantity,
        color: products[url ? url - 1 : 1].color,
      },
    ]);
    setNoOfCartItems(isProductUnique.length);
  }

  function decrease() {
    if (products[url ? url - 1 : 1].quantity > 1) {
      setProducts((product) =>
        product.map((item) =>
          products[url ? url - 1 : 1].id === item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setShowTooltip(true);
      return 1;
    }
  }
  function increase() {
    setProducts((product) =>
      product.map((item) =>
        products[url ? url - 1 : 1].id === item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  return (
    <div className="single">
      <div
        key={products[url ? url - 1 : 1].id}
        className="single-container"
        onMouseEnter={() => {
          setCartProduct(isProductUnique);
        }}
      >
        <div className="img-div">
          <span
            className="color"
            style={{ backgroundColor: products[url ? url - 1 : 1].color }}
          ></span>
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
            {colors.map((color2) => (
              <p
                id="pickcolor"
                className="PickColor"
                style={{
                  backgroundColor: color2,
                }}
                onClick={() => {
                  setProducts((product) =>
                    product.map((item) =>
                      products[url ? url - 1 : 1].id === item.id
                        ? { ...item, color: (item.color = color2) }
                        : item
                    )
                  );
                }}
              ></p>
            ))}
          </div>
          <div className="end-div">
            {showTooltip ? (
              <div className="tooltip-product">
                <p>
                  You can’t have a quantity of zero,
                  <br />
                  Are you sure you don't want to add this product to your cart
                </p>
                <NavLink to={"/"}>
                  <button className="btn-1">Back to home bage</button>
                </NavLink>
                <button
                  className="btn-2"
                  onClick={() => {
                    setShowTooltip(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : null}
            <div className="countcontiner">
              <span onClick={() => increase()} className="increase">
                +
              </span>
              <span className="count">
                {products[url ? url - 1 : 1].quantity}
              </span>
              <span onClick={() => decrease()} className="decrease">
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
