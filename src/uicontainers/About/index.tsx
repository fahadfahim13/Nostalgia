import React from "react";
import AboutBackground from "../../Assets/rec3.webp";
import AboutBackgroundImage from "../../Assets/rec2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" style={{ marginTop: '30%' }} />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          Recreation facility for 90s gaming experience
        </h1>
        <p className="primary-text">
        Our center provides a nostalgic experience centered around physical games that defined the iconic era of the 90s. 
        We cater to both the young and adult population, offering a range of engaging activities and games that transport our visitors back in time, 
        evoking feelings of joy, camaraderie, and friendly competition. Our recreation center is a unique location honoring the decade's entertainment and cultural highlights.
        </p>
        <p className="primary-text">
        Classic board games, including Ludo, Chess, Carrom, Cards, Snake & Ladder and field competitions, Badminton, Short-pitch Cricket, and indoor Football, 
        have all been carefully selected. Generations of players have cherished these games, and we hope to rekindle their affection for them.
        </p>
      </div>
    </div>
  );
};

export default About;
