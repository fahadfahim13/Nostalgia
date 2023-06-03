
import React from "react";
import BannerBackground from "../../Assets/rec1.avif";
import BannerImage from "../../Assets/rec3.webp";
import { FiArrowRight } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            90s Nostalgia
          </h1>
          <p className="primary-text">
            Welcoming, vibrant and exciting recreation center in Dhaka, Bangladesh's heart. 
            The "Reviving 90's Memory" package features immersive exhibits, themed rooms, and fun activities that make you feel like you're back in the decade.
          </p>
          <button className="secondary-button">
            Visit Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" style={{ marginTop: '15%', marginLeft: '-5%' }} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
