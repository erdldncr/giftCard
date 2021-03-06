import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editGiftCard } from "../../actions";
import "./EditForm.css";

const EditForm = ({ id }) => {
  const dispatch = useDispatch();
  const { giftCards } = useSelector((state) => state);

  const [giftCard, setGiftCard] = useState({});
  useEffect(() => {
    setGiftCard(giftCards?.find((giftCard) => giftCard.id.toString() === id));
  }, [giftCards, id]);

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
        <label htmlFor="fname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={giftCard?.name || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="surname">Last Name</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="surname"
          value={giftCard?.surname || ""}
          onChange={handleChange}
          required
        />
        <label htmlFor="balance">Balance</label>
        <input
          type="number"
          id="balance"
          name="balance"
          placeholder="Balance"
          required
          value={giftCard?.balance || ""}
          onChange={handleChange}
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="Card  Number "
          value={giftCard?.cardNumber || ""}
          onChange={handleChange}
          maxLength={16}
          minLength={16}
          required
          pattern="\d*"
          title="should only contain digits"
        />

        <label htmlFor="validUntil">Expiration Date</label>
        <input
          type="date"
          id="validUntil"
          name="validUntil"
          placeholder="Expiration Date .."
          value={giftCard?.validUntil || ""}
          onChange={handleChange}
        />

        <input type="submit" value="Edit Card" />
      </form>
    </div>
  );
};

export default EditForm;
