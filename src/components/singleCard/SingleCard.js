import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SingleCard.css";

const dateValidator = (validUntil) => {
  const date = new Date(validUntil);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return month + "/" + [...year.toString()].slice(2).join("");
};
const validateCardNumber = (cardNumber) => {
  return [...cardNumber]
    .map((el, idx) => ((idx + 1) % 4 === 0 ? `${el} ` : el))
    .join("");
};
const SingleCard = ({ name, surname, cardNumber, validUntil, id }) => {
  const [expirationDate, setExpirationDate] = useState("");
  useEffect(() => {
    setExpirationDate(dateValidator(validUntil));
  }, [validUntil]);

  return (
    <Link to={`/edit/${id}`}>
      <div className="card centered">
        <img
          className="logo"
          src="https://gist.githubusercontent.com/beckettnormington/9b6427d6f220b6f94e324c86d01cee30/raw/ad33f00e6e29e8e6662c4accb07bc3b0b90841a0/mastercard.svg"
          height="60"
          alt="logo"
        />
        <img
          className="chip"
          src="https://img.icons8.com/ios/452/sim-card-chip.png"
          height="45"
          alt="chip"
        />
        <p className="digits">{cardNumber && validateCardNumber(cardNumber)}</p>
        <p className="name">{`${name || "name"} ${surname || "surname"}`}</p>

        <div style={{ display: "block", float: "right" }}>
          <p className="valid-text">
            Valid Thru
            <br />
            <span className="valid-date">{expirationDate || "00-00-0000"}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
