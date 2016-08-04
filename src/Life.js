import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Text from "./Text";

export default class Life extends Component {

  constructor(props) {
    super();
  }

  componentDidUpdate() {

  }

  test() {
    console.log("test");
  }

  getEarthRadius() {
    return 6371000;
  }

  render() {
    return (
      <Entity id="life">

        {/* <Target
          rotation={[-45, 2, 0]}
          doOnClick={this.test}
        >
          <Text
            text={["Planet", "It's blue!"]}
          />
        </Target>

        <Entity
          position={[
            0,
            -this.getEarthRadius() * 0.91,
            -this.getEarthRadius() * 1.25,
          ]}
          geometry={{
            primitive: "sphere",
            radius: this.getEarthRadius(),
            segmentsWidth: 36,
            segmentsHeight: 72,
          }}
          material={{
            color: "cyan",
          }}
        />

        <Target
          rotation={[70, 50, 50]}
          doOnClick={this.test}
        >
          <Text
            text={["Star"]}
          />
        </Target>

        <Rotator
          distance={this.AU}
          rotation={[70, 50, 50]}
        >
          <Entity
            geometry={{
              primitive: "sphere",
              radius: 695700000,
              segmentsWidth: 9,
              segmentsHeight: 18,
            }}
            material={{
              shader: "flat",
              color: "yellow",
            }}
            light={{
              type: "directional",
              color: "#aaa",
            }}
          />
        </Rotator> */}

      </Entity>
    );
  }

}
