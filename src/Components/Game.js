import React from "react";
//import images from images component.
import Images from "./Images";

class Game extends React.Component {
  //render and return images component.
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} />
      </div>
    );
  }
}

//export code to be avalable outside this module.
export default Game;