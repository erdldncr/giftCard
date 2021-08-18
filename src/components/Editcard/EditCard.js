import React, { useEffect, useState } from "react";
import SingleCard from "../singleCard/SingleCard";

import EditCardForm from "./EditCardForm";
import "./EditCard.css";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
const EditCard = () => {
  const { id } = useParams();
  const { giftCards } = useSelector((state) => state);
  const [giftCard, setGiftCard] = useState({});
  useEffect(() => {
    setGiftCard(giftCards?.find((giftCard) => giftCard.id == id));
  }, [giftCards, id]);

  return (
    <Fragment>
      <div className="edit-container">
        <EditCardForm id={id} />
        <SingleCard {...giftCard} />
      </div>
    </Fragment>
  );
};

export default EditCard;
