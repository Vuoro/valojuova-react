import React, { Component } from "react";
import reactMixin from "react-mixin";
import Firebase from "firebase";
import ReactFire from "reactfire";

import World from "./World";

class Connection extends Component {
  constructor(props) {
    super(props);

    Firebase.initializeApp({
      authDomain: "valojuova-21914.firebaseapp.com",
      apiKey: "AIzaSyB5faHhAC39BJCZztidvGHQbjXORHkX6Xw",
      databaseURL: "https://valojuova-21914.firebaseio.com",
      storageBucket: "valojuova-21914.appspot.com",
    });

    this.state = {
      players: [],
      player: null,
    }
  }

  componentWillMount() {
    Firebase.auth().onAuthStateChanged(function(player) {
      if (player) {
        console.log("Player authenticated:");
        console.log(player);
        this.setState({player: player.uid});
      } else {
        console.log("Player not authenticated");
        this.setState({player: null});
      }
    }.bind(this));

    this.bindAsArray(
      Firebase.database().ref("players"),
      "players",
      function(error) {
        console.log("Firebase subscription cancelled:")
        console.log(error);
      }
    );
  }

  signIn() {
    console.log("Trying to sign in…");
    Firebase.auth().signInAnonymously().catch(function(error) {
      console.log(error);
    });
  }

  signOut() {
    console.log("Trying to sign out…");
    Firebase.auth().signOut().catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <World
        game={this.props.game}
        connection={this.state}
        signIn={this.signIn}
        signOut={this.signOut}
      />
    );
  }
}

reactMixin(Connection.prototype, ReactFire);
export default Connection;
