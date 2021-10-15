import React from "react";
//import main component.
import Main from "./Components/Main";
//import external stylesheet from app.css.
import "./App.css";
//import rules from rules component.
import Rules from "./Components/Rules";

//display main and rules component.
function App() {
  return (
    <div className="App">
      <Main />
      <Rules />
</div>
);
}

//export code to be avalable outside this module.
export default App;

/*References:
https://medium.com/@cqpro/lets-build-a-matching-card-game-with-react-d8923d915e46
https://dev.to/lucvankerkvoort/react-memory-game-2ep9 
https://www.code-boost.com/react-memory-game/ */