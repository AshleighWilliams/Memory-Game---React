import React from "react";
//import messages array from messages component.
import { messages } from "./Messages";

class EndGame extends React.Component {
  //create click event.
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    //math random method to display different messages each time.
    messages.sort(() => Math.random() - 0.5);
    //display div with message.
    return (
      <div className="end-game">
        <div className="message">
          <h2>{messages[0].title}</h2>
          <p>{messages[0].message}</p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Play Again
          </button>
        </div>
      </div>
    );
  }
}

//export code to be avalable outside this module.
export default EndGame;