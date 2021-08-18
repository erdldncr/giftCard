import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import SingleCard from "../singleCard/SingleCard";
import "./AddNewCard.css";
import NewCardForm from "./NewCardForm";
import { addNewGiftCard } from "../../actions";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// const createRandomCardNumber = () => {
//   const randomCardNumber = [...(Math.floor(Math.random() * 1e16) + "")]
//     .map((num, idx) => ((idx + 1) % 4 === 0 ? `${num} ` : num))
//     .join("");

//   return randomCardNumber;
// };

const AddNewCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newCardData, setNewCardData] = useState({});

  useEffect(() => {
    setNewCardData({
      id: uuidv4(),
      cardNumber: Math.floor(Math.random() * 1e16).toString(),
    });
  }, []);

  const handleChange = (e) => {
    setNewCardData({
      ...newCardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewGiftCard(newCardData));
    history.push("/");
  };
  return (
    <Fragment>
      <div className="add-card-container">
        <NewCardForm
          newCardData={newCardData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <SingleCard {...newCardData} />
      </div>
    </Fragment>
  );
};

export default AddNewCard;
