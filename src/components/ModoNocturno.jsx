import React, { Component } from "react";

class ModoNocturno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "On",
    };
  }
  flipSwitch = () => {
    if (this.state.position === "On") {
      this.setState({ position: "Off" });
    } else {
      this.setState({ position: "On" });
    }
  };

  render() {
    return (
      <div className="nocturno">
        <p>El modo nocturno esta {this.state.position}</p>
        <button onClick={this.flipSwitch}>Apagar modo nocturno</button>
      </div>
    );
  }
}

export default ModoNocturno;
