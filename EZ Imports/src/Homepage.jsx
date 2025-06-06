import React, { useState, useEffect } from "react";
import "./Homepage.css";
import StripLights from "./assets/LED Striplight.jpg";
import HStrip from "./assets/HStrip.jpg";

const images = [StripLights, HStrip];

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="homepage">
      <div className="banner">
        <div
          className="banner-container"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Banner"
              className="banner-image"
            />
          ))}
        </div>

        <button className="arrow arrow-left" onClick={prevImage}>
          &#10094;
        </button>

        <button className="arrow arrow-right" onClick={nextImage}>
          &#10095;
        </button>
      </div>
      <div className="content">
        <main style={{ paddingTop: "60px" }}>
          <h1>hellur</h1>
          <p>content stuff</p>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
