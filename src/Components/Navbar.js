import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score } = this.props;
    //return title navbar.
    return (
      <div className="navbar">
        <div className="game-title">The Self-love Memory Game</div>
        <div className="name">Player: {name}</div>
        <div className="score">Your Score: {score}</div>
      </div>
    );
  }
}

//export code to be avalable outside this module.
export default Navbar;