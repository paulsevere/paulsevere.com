import React, { Component } from "react";
import Letters from "./components/Letters";

// import "./App.css";

class App extends Component {
  render() {
    const text = "content";
    return (
      <div className="App">
        <Letters letters={text} />
      </div>
    );
  }
}

export default App;
