import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export class App extends Component {
  state = {
    postArray: [
      {
        id: uuidv4(),
        body: "Lol",
      },
      {
        id: uuidv4(),
        body: "hehe",
      },
      {
        id: uuidv4(),
        body: "haha",
      },
    ],
    post: "",
  };

  handleShowPostArray = () => (
    <ul>
      {this.state.postArray.map(({ body, id }) => (
        <li key={id}>{body}</li>
      ))}
    </ul>
  );

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePostSubmit = (event) => {
    event.preventDefault();

    let newArray = [
      ...this.state.postArray,
      { id: uuidv4(), body: this.state.post },
    ];

    this.setState({
      postArray: newArray,
    });
  };

  /*
    1. after a successful submit the input should get cleared
    2. if the input is empty and a user tried to submit, it should show up an error message "Cannot submit an empty field"
    3. as soon as there value in the input field the error message is cleared
    4. using css make the bullet points go away
  */

  render() {
    const { post } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handlePostSubmit}>
          <input name="post" value={post} onChange={this.handleInputChange} />
          <button>Submit</button>
        </form>

        {this.handleShowPostArray()}
      </div>
    );
  }
}

export default App;
