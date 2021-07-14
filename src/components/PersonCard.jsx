import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="Card">
        <h1>
          {firstName} <span></span>
          {lastName}
        </h1>
        <p>{age}</p>
        <p>{hairColor}</p>
      </div>
    );
  }
}

export default PersonCard;
