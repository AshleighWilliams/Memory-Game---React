import React, {Component} from "react";
//import login from login component.
import Login from "./Login";
//import game from game component.
import Game from "./Game";
//import navabar from navbar component.
import Navbar from "./Navbar";
//import endgame from endgame component.
import EndGame from "./EndGame";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };

  //handlelogin event.
  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  //handleendgame event.
  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };

  //render to display login, endgame, navbar and game components.
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

//export code to be avalable outside this module.
export default Main;