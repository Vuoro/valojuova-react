import React, { Component } from "react";
import World from "./World";

class Connection extends Component {
  render() {
    return (
      <World
        gameState={this.props.gameState}
      />
    );
  }
}

export default Connection;
