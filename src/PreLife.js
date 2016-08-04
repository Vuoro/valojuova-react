import React, { Component } from "react";
import {Entity} from "aframe-react";

import Text from "./Text";

export default class PreLife extends Component {

  constructor(props) {
    super();

    this.signIn = this.signIn.bind(this);

    this.state = {
      state: "initial",
    };
  }

  componentDidUpdate() {

  }

  signIn() {
    this.props.signIn();
  }

  getSmallText(state) {
    switch (state) {
      case "initial":
        return "";
      case "creating":
        return "Creating a game…";
      case "redirecting":
        return "Redirecting to game…";
      case "error":
      default:
        return "Error! Try again?";
    }
  }

  render() {
    return (
      <Entity id="pre-life">

        <Text
          class="logo"
          text="VALOJUOVA"
          size={30}
          position={[
            -30 * 4,
            30 / 2,
            -100,
          ]}
        />

        <Entity
          class="start-playing-button"
          geometry={{
            primitive: "box",
            width: 5,
            height: 0.1,
            depth: 2,
          }}
          material={{
            color: "green",
            shader: "flat",
          }}
          rotation={[
            90,
            0,
            0,
          ]}
          position={[
            0,
            -1.5,
            -8,
          ]}
          onClick={this.signIn}
        >

          <Text
            text={[
              "PLAY",
              this.getSmallText(this.state.state),
            ]}
            size={1}
            lineHeight={2}
            rotation={[
              -90,
              0,
              0,
            ]}
            position={[
              -1.6,
              0.1,
              0.5,
            ]}
            onClick={this.signIn}
          />

        </Entity>

      </Entity>
    );
  }

}
