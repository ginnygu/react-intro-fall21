import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export class App extends Component {
  state = {
    name: "",
  };

  async componentDidMount() {
    try {
      let result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      console.log(result.data);
      //1. Get the picture to show up
      //2. Get the abilities to show up
      //3. HOW CAN YOU MAKE THIS DYNAMIC - YOU WILL NEED AN INPUT and a BUTTON
      this.setState({
        name: result.data.name,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return <div className="App">{this.state.name}</div>;
  }
}

export default App;
