import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = ({ products, setProducts }) => {
  const [productName, setProductName] = useState("");
  const [productCost, setProductCost] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [productDescription, setProductDescription] = useState("");

  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true"; 

  
  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/" />; 
  }

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);

    
    const base64Promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    });

    try {
      const base64Images = await Promise.all(base64Promises);
      setProductImages((prevImages) => [...prevImages, ...base64Images]);
    } catch (error) {
      console.error("Error converting images:", error);
    }
  };

  const addProduct = () => {
    if (
      productName.trim() &&
      productCost.trim() &&
      productImages.length > 0 &&
      productDescription.trim()
    ) {
      const newProduct = {
        name: productName,
        cost: productCost,
        description: productDescription,
        images: productImages, 
      };
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts, newProduct];
        localStorage.setItem("products", JSON.stringify(updatedProducts)); 
        return updatedProducts;
      });
      
      setProductName("");
      setProductCost("");
      setProductImages([]);
      setProductDescription("");
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter product name"
      />
      <input
        type="number"
        value={productCost}
        onChange={(e) => setProductCost(e.target.value)}
        placeholder="Enter product cost"
      />
      <textarea
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        placeholder="Enter product description"
        rows="4"
      />
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        accept="image/*"
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AdminPanel;
