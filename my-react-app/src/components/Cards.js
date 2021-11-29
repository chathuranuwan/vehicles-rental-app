import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Choose a Vehicle that Suits for Your Needs</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Come and experience our services"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Choose a Vehicle that Suits Your Needs"
              path="/vehicles"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Choose a Vehicle that Suits Your Needs"
              path="/vehicles"
            />
            <CardItem
              src="images/img-4.jpg"
              text="we have a large collection of vehicles"
              path="/vehicles"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Choose a Vehicle that Suits Your Needs"
              path="/vehicles"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
