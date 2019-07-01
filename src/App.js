import React, { Component } from "react";
import Collections from "./components/Collections";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Collections />
      </div>
    );
  }
}

export default App;
