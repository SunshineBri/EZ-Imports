import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = ({ products, setProducts, isAdmin }) => {
  const categories = ["All", "Clothing", "Electronics", "Accessories"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const removeProduct = (productIndex) => {
    const updatedProducts = products.filter(
      (_, index) => index !== productIndex
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="shop-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> &gt; <span>Shop</span>
      </nav>
      <div className="content-container">
        <div className="sidebar">
          <div className="categories-section">
            <h3>Categories</h3>
            <ul className="categories-list">
              {categories.map((category, index) => (
                <li key={index} onClick={() => setSelectedCategory(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="shop-catalog">
          <h1>Shop</h1>
          {filteredProducts.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product, index) => (
                <div key={index} className="product-card">
                  {product.images && product.images.length > 0 && (
                    <img src={product.images[0]} alt={product.name} />
                  )}
                  <h3>{product.name}</h3>
                  <p>Cost: ${product.cost}</p>
                  <p>{product.description}</p>
                  {isAdmin && (
                    <button
                      onClick={() => removeProduct(index)}
                      className="remove-btn"
                    >
                      Remove Product
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
