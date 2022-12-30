import React, { useEffect, useContext, useState } from "react";
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
    setProducts,
  } = useContext(ProductContxt);

  const [pickColor] = useState("black");
  // Get Products Api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => setProducts([]));
  }, [setProducts]);


  if (products) { for (let i = 0; i <= 19; i++){
    products[i]['quantity'] = 1;
  }}

  let style = {}

  console.log(style)

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
        <p className="tooltip">The default color of this product when added to the cart will be black, you can change the color from the cart.</p>
        <button
              className="pro_btn"
              style={{ width:"100%"}}
          onClick={() => {
            setCartProduct((prev) => [
              ...prev,
              {
                id: product.id,
                image: product.image,
                description: product.description,
                rating: product.rating,
                title: product.title,
                price: product.price,
                color: pickColor,
              },
            ]);
            setNoOfCartItems(isProductUnique.length);
            style = { display: "none" }
            }}
            onMouseEnter={() => {
              style = { display: "none" }
            }}
        >
          Add to cart
            </button>
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
