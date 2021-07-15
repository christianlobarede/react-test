import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }
  upOne = () => {
    this.setState({ age: this.state.age + 1 });
  };
  downOne = () => {
    this.setState({ age: this.state.age - 1 });
  };
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="Card">
        <h1>
          {firstName} <span></span>
          {lastName}
        </h1>
        <p id="Edad">Age: {this.state.age}</p>
        <p>Hair color: {hairColor}</p>
        <div id="buttons">
          <button id="Button" onClick={this.upOne}>
            Un año mas: {firstName} {lastName}
          </button>
          <button id="Button" onClick={this.downOne}>
            Un año menos: {firstName} {lastName}
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCard;
