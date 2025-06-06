import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Shop from "./Shop.jsx";
import Homepage from "./Homepage.jsx";
import ProductPage from "./ProductPage";
import AdminPanel from "./AdminPanel";
import Login from "./Login";
import "./App.css";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              setProducts={setProducts}
              isAdmin={isAdmin}
            />
          }
        />
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
        {isAdmin && (
          <Route
            path="/admin"
            element={
              <AdminPanel products={products} setProducts={setProducts} />
            }
          />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
