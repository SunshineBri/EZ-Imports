import React from "react";
import WhatsappLogo from "./assets/Whatsapp Logo.png";
import facebookLogo from "./assets/FB Logo.png";
import InstagramLogo from "./assets/IG Logo.png";
import TiktokLogo from "./assets/Tiktok Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <a
            href="https://www.whatsapp.com/catalog/18684877086/?app_absent=0"
            target="_blank"
          >
            <img
              src={WhatsappLogo}
              className="logo whatsapp"
              alt="Whatsapp logo"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556634142896"
            target="_blank"
          >
            <img
              src={facebookLogo}
              className="logo facebook"
              alt="Facebook logo"
            />
          </a>
          <a
            href="https://www.instagram.com/ez.imports868/?fbclid=IwY2xjawE8OINleHRuA2FlbQIxMAABHSZ06IzFA-u8koX0Q1rAVbmHtYCmQWthygZBpN1hJV_EOkfK7KaukHCRSA_aem_VbFcZQ49s34hBwYuYPB0eA"
            target="_blank"
          >
            <img
              src={InstagramLogo}
              className="logo instagram"
              alt="Instagram logo"
            />
          </a>
          <a
            href="https://www.tiktok.com/@ez_imports868?is_from_webapp=1&sender_device=pc"
            target="_blank"
          >
            <img src={TiktokLogo} className="logo tiktok" alt="Tiktok logo" />
          </a>
        </p>
        <p>
          &copy;{new Date().getFullYear()} EZ Imports.All rights
          reserved.Developed by Brittney Dhanoo
        </p>
        <ul className="footer-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
