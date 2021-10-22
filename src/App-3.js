import React, { Component } from "react";

import "./App.css";

export class App extends Component {
  state = {
    message: "....loading",
    backgroundColor: "orange",
    toggleShowMe: true,
  };

  componentDidMount() {
    //make ajax call to a server or an api

    setTimeout(() => {
      this.setState({
        message: "component did mount executed! so the message is changed",
        backgroundColor: "red",
      });
    }, 2000);
  }

  handleClickMe = () => {
    this.setState({
      message: "clicked",
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message) {
      this.setState({
        backgroundColor: "blue",
        message:
          "Component Did Update executed!!! so the message is changed again",
      });
    }
    //infinite loop!!!! be very careful if you ever need to use componentDidUpdate
    // if (
    //   prevState.message ===
    //   "Component Did Update executed!!! so the message is changed again"
    // ) {
    //   console.log("hello class");
    //   this.setState({ color: "pink" });
    // }
  }

  toggleShowMe = () => {
    this.setState((prevState) => {
      return {
        toggleShowMe: !prevState.toggleShowMe,
      };
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClickMe}>Click Me</button>

        <hr />
        <div style={{ backgroundColor: "white" }}>
          {this.state.toggleShowMe ? <ShowMe /> : ""}
          <button onClick={this.toggleShowMe}>Toggle Me</button>
        </div>
      </div>
    );
  }
}

class ShowMe extends Component {
  state = {
    showMeMessage: "Show me Component",
  };

  componentDidMount() {
    this.showMeSetTimeout = setTimeout(() => {
      this.setState({
        showMeMessage: "Set time out is executed!!!!!!! Show me",
      });
    }, 3000);
  }
  componentWillUnmount() {
    console.log(88);
    clearTimeout(this.showMeSetTimeout);
  }
  render() {
    return <div>{this.state.showMeMessage}</div>;
  }
}

export default App;
