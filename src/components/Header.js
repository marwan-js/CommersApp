import React, { useContext } from "react";
import { ProductContxt } from "../App";
import "../style/Header.css";
import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Route, Routes } from "react-router-dom";
import { Header_link } from "../constants";
import Cart from "./cart";
function Header() {
  const { noOfCartItems, setCart } = useContext(ProductContxt);

  function openCart() {
    setCart(true);
  }

  return (
    <>
      <div className="mainhead">
        <p>Free shipping + exchanges over $100.</p>
      </div>
      <div className="header">
        <div className="logo">
          <img
            alt="no"
            src="https://cdn.shopify.com/s/files/1/0665/2889/files/Thesus_A_W_Wordmark_Forest_Green_2cca776c-1727-4416-868a-fa72e7359f08.png?v=1635783797"
            style={{ width: "200px" }}
          />
        </div>
        <div className="links">
          {Header_link.map((link) => (
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={link.herf}
            >
              <p className="Header_link" key={link.id}>
                {link.link}
              </p>
            </NavLink>
          ))}
        </div>
        <div className="icon-div" onClick={openCart}>
          <span className="Header_count">{noOfCartItems}</span>
          <FontAwesomeIcon className="icon" icon={faShoppingBag} />
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="image">
              <div>Men</div>
            </div>
          }
        />
      </Routes>
      <Cart />
    </>
  );
}
<script
  src="https://kit.fontawesome.com/ce371ba82b.js"
  crossorigin="anonymous"
></script>;
export default Header;
