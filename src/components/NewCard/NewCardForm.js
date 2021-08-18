import React from "react";

const NewCardForm = ({ newCardData, handleChange, handleSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={newCardData?.name || ""}
          onChange={handleChange}
        />
        <label htmlFor="surname">Last Name</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="surname"
          value={newCardData?.surname || ""}
          onChange={handleChange}
        />
        <label htmlFor="balance">Balance</label>
        <input
          type="text"
          id="balance"
          name="balance"
          placeholder="Balance"
          value={newCardData?.balance || ""}
          onChange={handleChange}
        />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="Card  Number "
          minLength={16}
          maxLength={16}
          value={newCardData?.cardNumber || ""}
          disabled={true}
        />
        <label htmlFor="validUntil">Expiration Date</label>
        <input
          type="date"
          id="validUntil"
          name="validUntil"
          placeholder="Expiration Date .."
          value={newCardData?.validUntil || new Date().toLocaleString()}
          onChange={handleChange}
        />
        <input type="submit" value="Add New Card" />
      </form>
    </div>
  );
};

export default NewCardForm;
