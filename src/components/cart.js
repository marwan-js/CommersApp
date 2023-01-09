import React, { useContext, useEffect, useState } from "react";
import { ProductContxt } from "../App";
import Cartproduct from "./Cartproduct";
import "../style/Header.css";
import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const {
    noOfCartItems,
    cartState,
    setCart,
    isProductUnique,
    setCartProduct,
    cartProduct,
    setIsProductUnique,
    setNoOfCartItems,
  } = useContext(ProductContxt);

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let uniqueProduct = cartProduct
      ?.map((e) => e["id"])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => cartProduct[e])
      .map((e) => cartProduct[e]);
    setIsProductUnique(uniqueProduct);
  }, [cartProduct, setCartProduct, setIsProductUnique]);

  useEffect(() => {
    setNoOfCartItems(isProductUnique.length);
  }, [cartProduct.length, isProductUnique.length, setNoOfCartItems]);

  let close = () => {
    setCart(false);
    setCartProduct(isProductUnique);
  };

  let deleteAllProducts = () => {
    setCartProduct([]);
  };

  let total = 0;
  const price = isProductUnique?.map((i) => i.price);
  price?.forEach((item) => (total += item));

  return cartState ? (
    <div className="cart">
      <div className="continer">
        <div className="cart_div">
          <p className="cart_p1">Your cart({noOfCartItems})</p>
          <button className="cart_btn1" onClick={close}>
            close
          </button>
        </div>
        {noOfCartItems ? null : (
          <FontAwesomeIcon icon={faShoppingBag} className="cart_icon" />
        )}
        {noOfCartItems ? (
          <div className="cartProudect">
            {isProductUnique?.map((product) => (
              <Cartproduct
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                color={product.color}
                array={isProductUnique.indexOf(product)}
                quantity={product.quantity}
                category={product.category}
              />
            ))}
          </div>
        ) : null}
        {noOfCartItems ? (
          <>
            {showTooltip ? (
              <div className="tooltip-cart2">
                <p>Are you sure you want to delete all cart </p>
                <button className="btn-1" onClick={deleteAllProducts}>
                  Delete
                </button>
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
            <p
              className="del"
              onClick={() => {
                setShowTooltip(true);
              }}
            >
              Delete
            </p>
          </>
        ) : null}
        {noOfCartItems === 0 ? (
          <p className="cart_p2">Your cart is embty</p>
        ) : null}
        {noOfCartItems ? null : (
          <button className="cart_btn2">Check our site</button>
        )}
        {noOfCartItems ? (
          <p className="cart_total">Your Total Price Is:${total.toFixed(2)}</p>
        ) : null}
        {noOfCartItems ? <button className="cart_btn2">Checkout</button> : null}
      </div>
      <div
        className="layaout"
        onClick={() => {
          close();
          setShowTooltip(false);
        }}
      ></div>
    </div>
  ) : null;
}

export default Cart;
