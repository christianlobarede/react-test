import React, { Component } from "react";

const PersonCard = (props) => {
  return (
    <div className="Card">
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair color: {props.hairColor}</p>
    </div>
  );
};

export default PersonCard;
