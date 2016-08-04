import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

export default class Cursor extends Component {

  constructor(props) {
    super(props);

    this.time = 1000;

    this.shortTime = function(exponent) {
      return this.time / Math.pow(1.618, exponent);
    }

    this.longTime = function(exponent) {
      return this.time * Math.pow(1.618, exponent);
    }

    this.cursorSize = 0.05;
    this.gridRadius = 4;
    this.UIRadius = this.gridRadius - 1;
    this.UISpace = this.gridRadius - this.UIRadius;
    this.gridThickness = 0.003;
    this.cursorLineThickness = 0.125;
    this.cursorActive = 1.618;
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <Entity id="cursor">

          <Entity
            id="cursor-beam-rotator"
            rotation={[
              90 + 13.5,
              9.875,
              0,
            ]}
            position={[
              this.cursorSize * 0.618,
              -this.cursorSize * 0.618,
              -this.UIRadius,
            ]}
          >
            <Entity
              id="cursor-beam"
              geometry={{
                primitive: "cylinder",
                radius: this.cursorSize * this.cursorLineThickness / 2,
                height: this.gridRadius,
              }}
              material={{
                color: "red",
                shader: "flat",
              }}
              position={[
                0,
                this.gridRadius * 0.5,
                0,
              ]}
            />
          </Entity>

          <Entity
            id="cursor-point"
            cursor={{
              fuse: false,
              maxDistance: this.gridRadius + 1,
            }}
            geometry={{
              primitive: "circle",
              radius: this.cursorSize,
            }}
            position={[
              0,
              0,
              -this.UIRadius,
            ]}
            material={{
              color: "red",
              shader: "flat",
            }}
          >

            <Animation
              begin="mousedown"
              easing="ease-out"
              attribute="scale"
              fill="both"
              to={[this.cursorActive, this.cursorActive, this.cursorActive]}
              from="1 1 1"
              dur={this.shortTime(7)}
            />

            <Animation
              begin="mouseup"
              easing="ease-out"
              attribute="scale"
              fill="both"
              from={[this.cursorActive, this.cursorActive, this.cursorActive]}
              to="1 1 1"
              dur={this.shortTime(5)}
            />

          </Entity>

      </Entity>
    );
  }

}
