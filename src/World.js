import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Camera from "./Camera";
import PreLife from "./PreLife";
import Life from "./Life";

import starfield from "./images/starfield.png"

class World extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  getComponentByState(player) {
    if (player) {
      return (
        <Life player={player}/>
      );
    }
    else {
      return (
        <PreLife/>
      );
    }
  }

  getCameraCenter(playerLocation) {
    // const x =
    //   this.tilesPerRow * 0.5
    //   + Math.floor(playerLocation[0] / this.tilesPerRow)
    //   * this.tilesPerRow
    // ;
    // const y = 0;
    // const z =
    //   this.tilesPerColumn * 0.5
    //   + Math.floor(playerLocation[2] / this.tilesPerColumn)
    //   * this.tilesPerColumn
    //   + this.cameraOffsetZ
    // ;
    // return [-x,-y,-z];
    return [0,0,0];
  }

  render() {
    return (
      <Scene
        id="scene"
        vr-mode-ui={{
          enabled: true,
        }}
      >

        <Camera
          id="camera"
          width={this.props.gameState.width}
          height={this.props.gameState.height}
          inVR={this.props.gameState.inVR}
          devMode={this.props.gameState.devMode}
        />

        <Entity
          id="sky"
          geometry={{
            primitive: "sphere",
            radius: 50*1000,
          }}
          material={{
            shader: "flat",
            src: `url(${starfield})`,
          }}
          scale={[1, 1, -1]}
        />

        <Entity
          id="ambientLight"
          light={{
            type: "ambient",
            color: "#333",
          }}
        />

        <Entity
          id="outside-camera"
          position={this.getCameraCenter()}
        >

          {this.getComponentByState(this.props.player)}

        </Entity>

      </Scene>
    );
  }
}

export default World;
