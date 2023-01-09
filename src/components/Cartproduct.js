import React, { useContext, useState } from "react";
import "../style/Cart.css";
import { ProductContxt } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../constants";

function CartProduct({ id, image, title, price, color, array, quantity }) {
  const { isProductUnique, setNoOfCartItems, setIsProductUnique } =
    useContext(ProductContxt);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showColorsList, setShowColorsList] = useState(true);

  let colorOptions = colors.map((option) => (
    <li
      className="colorLi"
      style={{ backgroundColor: option }}
      onClick={() => {
        setIsProductUnique((product) =>
          product.map((item) =>
            id === item.id ? { ...item, color: (item.color = option) } : item
          )
        );
        setShowColorsList(true);
      }}
    ></li>
  ));

  console.log(color);

  function deleteProduct() {
    delete isProductUnique[array];
    setNoOfCartItems((e) => e - 1);
  }
  function decreaseQuantity(product_id) {
    if (quantity > 1) {
      setIsProductUnique((product) =>
        product.map((item) =>
          product_id === item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setShowTooltip(true);
      return 1;
    }
  }
  function increaseQuantity(product_id) {
    setIsProductUnique((product) =>
      product.map((item) =>
        product_id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  return (
    <div key={id} className="cartProudect_dev" id="co">
      <img src={image} alt={"No"} className="cart-img" />
      <div className="info">
        <div className="count-trash-contain">
          <h3 className="cartProudect_h3">{title}</h3>
          <FontAwesomeIcon
            icon={faTrash}
            className="cart_icon2"
            onClick={deleteProduct}
          />
        </div>
        <div className="price-color-contain">
          <p className="cartProudect_p">${price}</p>
          <div className="colordiv">
            <span style={{ display: "inline", fontSize: "20px" }}>Color:</span>
            <p className="colorp" style={{ backgroundColor: color }}></p>
          </div>
        </div>
        {showColorsList ? (
          <div
            className="openColorOptions"
            onClick={() => {
              setShowColorsList(false);
            }}
          >
            \/
          </div>
        ) : (
          <div className="colorContain">
            <div
              className="closeColorOptions"
              onClick={() => {
                setShowColorsList(true);
              }}
            >
              ^
            </div>
            <div className="colorOptions">{colorOptions}</div>
          </div>
        )}
        {showTooltip ? (
          <div className="tooltip-cart1">
            <p>
              You can’t have a quantity of zero, Are you sure you wish to delete
              this item
            </p>
            <button className="btn-1" onClick={deleteProduct}>
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
        <div className="count2">
          <p style={{ cursor: "pointer" }} onClick={() => increaseQuantity(id)}>
            +
          </p>
          <p>{quantity}</p>
          <p style={{ cursor: "pointer" }} onClick={() => decreaseQuantity(id)}>
            -
          </p>
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
