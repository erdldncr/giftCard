import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editGiftCard } from "../../actions";
import "./EditForm.css";

const EditForm = ({ id }) => {
  const dispatch = useDispatch();
  const { giftCards } = useSelector((state) => state);

  const [giftCard, setGiftCard] = useState({});
  useEffect(() => {
    setGiftCard(giftCards?.find((giftCard) => giftCard.id == id));
  }, [giftCards]);

  const handleChange = (e) => {
    setGiftCard({
      ...giftCard,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editGiftCard(id, giftCard));
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label for="fname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={giftCard?.name}
          onChange={handleChange}
        />
        <label for="surname">Last Name</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="surname"
          value={giftCard?.surname}
          onChange={handleChange}
        />
        <label for="balance">Balance</label>
        <input
          type="text"
          id="balance"
          name="balance"
          placeholder="Your surname.."
          value={giftCard?.balance}
          onChange={handleChange}
        />

        <label for="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="Card  Number "
          value={giftCard?.cardNumber}
          onChange={handleChange}
        />
        <label for="validUntil">Expiration Date</label>
        <input
          type="date"
          id="validUntil"
          name="validUntil"
          placeholder="Expiration Date .."
          value={giftCard?.validUntil}
          onChange={handleChange}
        />
        <input type="submit" value="Edit Card" />
      </form>
    </div>
  );
};

export default EditForm;
