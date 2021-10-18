import React, { Component } from "react";
import Message from "./components/Message";
import "./App.css";

export class App extends Component {
  render() {
    return (
      // <div className="App">
      // <div style={styles.appDiv}>
      <div style={{ textAlign: "center" }}>
        <Message name="class" message="how is your day going?" num={1} />
      </div>
    );
  }
}

const styles = {
  appDiv: {
    textAlign: "center",
  },
};

export default App;
