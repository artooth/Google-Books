import React, { Component } from "react";
import BookDisplay from "./components/BookDisplay";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookDisplay />
      </div>
    );
  }
}

export default App;