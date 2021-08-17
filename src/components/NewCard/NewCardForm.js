import React from "react";

const NewCardForm = ({ newCardData, handleChange, handleSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label for="fname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={newCardData?.name}
          onChange={handleChange}
        />
        <label for="surname">Last Name</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="surname"
          value={newCardData?.surname}
          onChange={handleChange}
        />
        <label for="balance">Balance</label>
        <input
          type="text"
          id="balance"
          name="balance"
          placeholder="Balance"
          value={newCardData?.balance}
          onChange={handleChange}
        />
        <label for="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="Card  Number "
          maxLength={16}
          value={newCardData?.cardNumber}
          onChange={handleChange}
        />
        <label for="validUntil">Expiration Date</label>
        <input
          type="date"
          id="validUntil"
          name="validUntil"
          placeholder="Expiration Date .."
          value={newCardData?.validUntil}
          onChange={handleChange}
        />
        <input type="submit" value="Add New Card" />
      </form>
    </div>
  );
};

export default NewCardForm;
