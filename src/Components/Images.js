import React from "react";
//import index from images component.
import { images } from "./Images/Index";

class Images extends React.Component {
  characters = [];
  handleClick = (event) => {
    let character = event.target;
    if (character.getAttribute("check") === "found") {
      return;
    }

    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
    }

    if (this.characters.length > 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0]);
        this.switch(this.characters[1]);
        this.characters.shift();
        this.characters.shift();
      } else {
        this.characters.shift();
        this.characters.shift();
      }
    }

    //display the back of the card(image blank).
    let allPictures = document.getElementsByClassName("image-blank");
    if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
      }
    }
  };

  checkName = (character1, character2) => {
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    }
    return false;
  };

  //create switch to check if the cards pair.
  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  };

  //render and return the images using array map method and math.random for non-repitative order.
  render() {
    return (
      <div className="images">
        {images
          .sort(() => Math.random() - 0.5)
          .map((element) => {
            return (
              <div
                className="image image-blank"
                name={element.name}
                style={{ background: `url(${element.pic})` }}
                check="false"
                onClick={this.handleClick}
              />
            );
          })}
      </div>
    );
  }
}

//export code to be avalable outside this module.
export default Images;