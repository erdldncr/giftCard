import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SingleCard.css";

const dateValidator = (validUntil) => {
  const date = new Date(validUntil);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return month + "/" + [...year.toString()].slice(2).join("");
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
        />
        <img
          className="chip"
          src="https://img.icons8.com/ios/452/sim-card-chip.png"
          height="45"
        />
        <p className="digits">{cardNumber}</p>
        <p className="name">{`${name || "name"} ${surname || "surname"}`}</p>

        <div style={{ display: "block", float: "right" }}>
          <p className="valid-text">
            Valid Thru
            <br />
            <d className="valid-date">{expirationDate}</d>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
