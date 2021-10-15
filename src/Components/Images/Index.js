//import images for the matching cards.

import One from "./1.jpeg";
import Two from "./2.jpeg";
import Three from "./3.jpeg";
import Four from "./4.jpeg";
import Five from "./5.jpeg";
import Six from "./6.jpeg";
import onePiece from "./onePiece.jpeg";

//images initially unflipped(false).
export let images = [
  {
    name: "One",
    pic: One,
    flipped: false,
  },
  {
    name: "Two",
    pic: Two,
    flipped: false,
  },
  {
    name: "Three",
    pic: Three,
    flipped: false,
  },
  {
    name: "Four",
    pic: Four,
    flipped: false,
  },
  {
    name: "Five",
    pic: Five,
    flipped: false,
  },
  {
    name: "Six",
    pic: Six,
    flipped: false,
  },

  //add the pairing/ matching card.
  {
    name: "One",
    pic: One,
    flipped: false,
  },
  {
    name: "Two",
    pic: Two,
    flipped: false,
  },
  {
    name: "Three",
    pic: Three,
    flipped: false,
  },
  {
    name: "Four",
    pic: Four,
    flipped: false,
  },
  {
    name: "Five",
    pic: Five,
    flipped: false,
  },
  {
    name: "Six",
    pic: Six,
    flipped: false,
  },
];

//export the array to be avalable outside this module.
export const blankCard = onePiece;