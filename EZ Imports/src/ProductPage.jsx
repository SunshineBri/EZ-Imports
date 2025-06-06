import React from "react";
import "./ProductPage.css"; 

function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-container">
        <img
          src="https://via.placeholder.com/300" 
          alt="Product"
          className="product-image"
        />
        <div className="product-details">
          <h1 className="product-title">Product Title</h1>
          <p className="product-description">
            This is a brief description of the product. It provides key details
            and features.
          </p>
          <p className="product-price">$29.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
