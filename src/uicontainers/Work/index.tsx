import React from "react";
import PickMeals from "../../Assets/food.png";
import BoardGames from "../../Assets/board.png";
import Museum from "../../Assets/museum.png";
import DeliveryMeals from "../../Assets/delivery-image.png";
import Sports from "../../Assets/sports.png";
import Gossip from "../../Assets/gossip.png";
import Kids from "../../Assets/kids.png";

const Work = () => {
  const workInfoData = [
    {
      image: Sports,
      title: "Indoor Sports",
      text: "Lace up your shirts and sports gears, and score in our indoor Football, Cricket and Banminton arena. Enjoy the fast-paced action in exhilarating matches with friends.",
    },
    {
      image: BoardGames,
      title: "90s Classic Games",
      text: "Roll the dice or strategically move your pieces, and race to victory in classic board games like Ludo, Chess, Carrom etc.. Experience the thrill and reignite your competitive spirit.",
    },
    {
      image: PickMeals,
      title: "Food Court",
      text: "From popular fast-food items to traditional street foods, our food court offers a delectable range of options to satisfy your cravings. Relish the taste of Nostalgia as you Savor these delicious treats.",
    },
    {
      image: Kids,
      title: "Children's Zone",
      text: "The Children's Zone at 90's Nostalgia offers a dedicated space where kids can have a blast with age-appropriate games, toys, and activities. ",
    },
    {
      image: Gossip,
      title: "Gossip Zone",
      text: "Step into our Gossiping Zone, where you can reminisce and share memories with friends, old and new. Engage in conversations about the trends, music, movies, and unforgettable moments of the '90s.",
    },
    {
      image: Museum,
      title: "Nostalgia Museum",
      text: "Step into our museum dedicated to preserving the artifacts and memories of the '90s. Explore a collection of iconic products, toys, gadgets, and photographs that defined the era.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Services</p>
        {/* <h1 className="primary-heading">Our Services</h1> */}
        <p className="primary-text">
        At 90's Nostalgia, we provide a vast selection of goods and services geared at those young and still young at heart. 
        Our objective is to deliver an adventure that is so engaging that it takes you back in time and allows you to relive beloved memories while also allowing you to 
        make new memories with friends, family, and other like-minded enthusiasts.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" style = {{ width: '100px' }} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
