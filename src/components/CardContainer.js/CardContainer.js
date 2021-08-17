import React from "react";

import { useSelector } from "react-redux";

import SingleCard from "../singleCard/SingleCard";
import "./CardContainer.css";
const CardContainer = () => {
  const { giftCards } = useSelector((state) => state);

  return (
    <div className="container">
      {giftCards?.map((giftCard, idx) => (
        <SingleCard key={idx} {...giftCard} />
      ))}
    </div>
  );
};

export default CardContainer;
