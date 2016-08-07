import React, { Component } from "react";
import {Entity} from "aframe-react";

import Text from "./Text";

export default class Life extends Component {

  constructor(props) {
    super();

    this.signOut = this.signOut.bind(this);
  }

  componentDidUpdate() {

  }

  signOut() {
    this.props.signOut();
  }

  render() {
    return (
      <Entity id="life">

        <Entity
          class="start-playing-button"
          geometry={{
            primitive: "box",
            width: 6,
            height: 0.1,
            depth: 2,
          }}
          material={{
            color: "red",
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
          onClick={this.signOut}
        >

          <Text
            text={[
              "Sign out",
            ]}
            size={1}
            lineHeight={2}
            rotation={[
              -90,
              0,
              0,
            ]}
            position={[
              -2.5,
              0.1,
              0.5,
            ]}
            onClick={this.signOut}
          />

        </Entity>

      </Entity>
    );
  }

}
