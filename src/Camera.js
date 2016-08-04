import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";
import Extras from "aframe-extras";
Extras.controls.registerAll();

import Cursor from "./Cursor";

export default class Camera extends Component {

  componentDidUpdate() {

  }

  render() {
    return (
      <Entity
        id="camera-container"
      >

        <Entity
          id="camera"
          camera={{
            far: 50*1000,
            near: this.props.near || 0.001,
            fov: this.props.inVR ? 80 : 90,
          }}
          universal-controls={{
            movementEnabled: this.props.devMode,
            // movementSpeed:        5,
            // movementEasing:       15,
            // movementAcceleration: 80,
            // rotationSensitivity:  0.05,
          }}
        >

          {this.props.children}

          <Cursor/>

        </Entity>

      </Entity>
    );
  }

}
