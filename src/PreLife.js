import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Text from "./Text";

export default class PreLife extends Component {

  constructor(props) {
    super();

    this.createPlayer = this.createPlayer.bind(this);

    this.state = {
      state: "initial",
    };
  }

  componentDidUpdate() {

  }

  createPlayer() {
    const that = this;
    const localStorageData = JSON.parse( localStorage.getItem("Game") );

    that.setState({state: "creating"});

    Meteor.call(
      "players.create",
      localStorageData.playerID,
      function (error, matchID) {
        if (error) {
          that.setState({state: "error"});
          console.log(error);
        }
        else if (matchID) {
          that.setState({state: "redirecting"});
        }
      }
    );
  }

  getPlayTextOffset(state) {
    if (state == "initial") {
      return this.tileSize * 0.375 * 0.5;
    }
    else {
      return this.tileSize * 0.375 * 0.333;
    }
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
            -30 / 2,
            -100,
          ]}
        />

        {/* <Rotator rotation={[20,0,0]}>
          <Entity
            class="start-playing-button"
            geometry={{
              primitive: "box",
              width: this.tileSize * 2,
              height: this.tileThickness,
              depth: this.tileSize,
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
            onClick={this.createPlayer}
          >

            <Text
              text="PLAY"
              size={this.tileSize * 0.375}
              height={this.tileThickness}
              rotation={[
                -90,
                0,
                0,
              ]}
              position={[
                -this.tileSize * 0.375 * 1.6,
                this.tileThickness * 0.5 * 0.5,
                this.getPlayTextOffset(this.state.state),
              ]}
              onClick={this.createPlayer}
            />

            <Text
              text={this.getSmallText(this.state.state)}
              size={this.tileSize * 0.125}
              height={this.tileThickness}
              rotation={[
                -90,
                0,
                0,
              ]}
              position={[
                -this.tileSize * 0.375 * 1.6,
                this.tileThickness * 0.5 * 0.5,
                this.tileSize * 0.375,
              ]}
              onClick={this.createPlayer}
            />

          </Entity>
        </Rotator> */}

      </Entity>
    );
  }

}
