import React, { useState } from "react";
import "./Header.css";
import ezlogo from "./assets/EZ logo.jpg";
import accountLogo from "./assets/Account.jpeg";
import searchIcon from "./assets/Search Icon.jpg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true"; 

  const handleLogin = (e) => {
    e.preventDefault();

    const adminUsername = "admin";
    const adminPassword = "password123";

    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem("isLoggedIn", "true"); 
      localStorage.setItem("isAdmin", "true"); 
      setDropdownOpen(false); 
      navigate("/admin"); 
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); 
    localStorage.removeItem("isAdmin"); 
    setDropdownOpen(false); 
    navigate("/"); 
  };

  return (
    <header className="header">
      <div className="menu-icon" style={{ cursor: "pointer" }}>
        &#9776;
      </div>

      <div className="logo-container">
        <Link to="/">
          <img
            src={ezlogo}
            alt="Logo"
            className="header-logo"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/shop">
              <img src={searchIcon} alt="search" className="search-logo" />
            </Link>
          </li>
          <li>
            <div
              className="account-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img src={accountLogo} alt="account" className="account-logo" />
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {!isLoggedIn ? (
                  
                  <form onSubmit={handleLogin}>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button type="submit">Log In</button>
                  </form>
                ) : (
                  
                  <div>
                    <p>Welcome, Admin!</p>
                    <button onClick={handleLogout} className="logout-button">
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
