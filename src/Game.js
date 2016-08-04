import React, { Component } from "react";
import Combokeys from "combokeys";

import Connection from "./Connection";

class Game extends Component {
  constructor(props) {
    super();

    this.combokeys = new Combokeys(document.documentElement);

    this.handleResize          = this.handleResize.bind(this);
    this.bindKeyboardShortcuts = this.bindKeyboardShortcuts.bind(this);
    this.toggleDevMode         = this.toggleDevMode.bind(this);
    this.startVR               = this.startVR.bind(this);
    this.stopVR                = this.stopVR.bind(this);

    this.state = {
      inVR: false,
      devMode: false,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener("enter-vr", this.startVR);
    window.addEventListener("exit-vr", this.stopVR);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.bindKeyboardShortcuts();
  }

  componentWillUnmount() {
    this.unbindKeyboardShortcuts();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener("enter-vr", this.startVR);
    window.removeEventListener("exit-vr", this.stopVR);
  }

  componentDidUpdate() {

  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  bindKeyboardShortcuts() {
    const that = this;

    this.combokeys.bind("g", function() { that.toggleDevMode(); });
    // combokeys.bind(["a", "left"], function() { that.move("left"); });
    // combokeys.bind(["d", "right"], function() { that.move("right"); });
    // combokeys.bind(["w", "up"], function() { that.move("up"); });
    // combokeys.bind(["s", "down"], function() { that.move("down"); });
  }

  unbindKeyboardShortcuts() {
    this.combokeys.detach();
  }

  toggleDevMode() {
    this.setState({
      devMode: !this.state.devMode,
    });
    console.log("Setting devMode to " + this.state.devMode);
  }

  startVR() {
    this.setState({
      inVR: true,
    });

    console.log("Setting inVR to " + this.state.inVR);
  }

  stopVR() {
    this.setState({
      inVR: false,
    });

    console.log("Setting inVR to " + this.state.inVR);
  }

  render() {
    return (
      <Connection
        game={this.state}
      />
    );
  }
}

export default Game;
