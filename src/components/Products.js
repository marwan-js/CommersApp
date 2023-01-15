import React, { useEffect, useContext } from "react";
import { ProductContxt } from "../App";
import axios from "axios";
import "../style/Products.css";
import { NavLink } from "react-router-dom";

function Proudects() {
  const {
    setNoOfCartItems,
    setCartProduct,
    isProductUnique,
    url,
    setUrl,
    products,
    cartProduct,
    setProducts,
  } = useContext(ProductContxt);

  // Get Products Api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => setProducts([]));
  }, [setProducts]);

  if (products) {
    for (let i = 0; i <= 19; i++) {
      products[i]["quantity"] = 1;
    }
    for (let i = 0; i <= 19; i++) {
      products[i]["color"] = "black";
    }
  }

  function addProducTtoCart() {
    if (cartProduct) {
      setCartProduct((product) =>
        product?.map((item) =>
          products[url ? url - 1 : 1].id === item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
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

  const Products = products?.map((product) => (
    <div
      key={product.id}
      className="pro"
      onMouseEnter={() => {
        setUrl(product.id);
        setCartProduct(isProductUnique);
      }}
    >
      <NavLink
        to={`/pro/${url}`}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <img src={product.image} alt="no" className="pro_image" />
      </NavLink>
      <div className="pro_contain">
        <span className="pro_rating">{product.rating.rate}</span>
        <span className="pro_count">{product.rating.count} Rating</span>
        <h3 className="pro_title">{product.title}</h3>
        <span className="pro_price">${product.price}</span>
        <div className="btn-contain">
          <NavLink
            to={`/pro/${url}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <button className="pro_btn">Go to product</button>
          </NavLink>
          <div className="tooltip-contain">
            <button
              className="pro_btn"
              style={{ width: "100%" }}
              onClick={() => addProducTtoCart()}
            >
              Add to cart
            </button>
            <p className="tooltip">
              The default color of this product when added to the cart will be
              black, you can change the color from the cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="products">
      {products ? (
        Products
      ) : (
        <div className="loading">
          loading
          <span className="span1"></span>
          <span className="span2"></span>
          <span className="span3"></span>
        </div>
      )}
    </div>
  );
}

export default Proudects;
