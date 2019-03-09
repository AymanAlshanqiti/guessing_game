import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
  state = {
    randomNumber: Math.floor(Math.random() * 101),
    userGuessedNumber: null,
    guessingResponse: "",
    numberOfTrying: 5,
    buttonValue: "Start Guessing"
  };

  takeUserGuess = number => {
    this.setState({ userGuessedNumber: number.target.value });
  };
  checkTheGuess = number => {
    if (this.state.numberOfTrying > 1) {
      if (this.state.userGuessedNumber === null) {
        this.setState({ guessingResponse: "Type a number between 0 - 100" });
        this.setState({ buttonValue: "Try again!" });
      } else if (this.state.userGuessedNumber > this.state.randomNumber) {
        this.setState({ guessingResponse: "Go Down" });
        let countDown = this.state.numberOfTrying - 1;
        this.setState({ numberOfTrying: countDown });
        this.setState({ buttonValue: "Try again!" });
      } else if (this.state.userGuessedNumber < this.state.randomNumber) {
        let countDown = this.state.numberOfTrying - 1;
        this.setState({ numberOfTrying: countDown });
        this.setState({ guessingResponse: "Go Up" });
        this.setState({ buttonValue: "Try again!" });
      } else {
        this.setState({ randomNumber: Math.floor(Math.random() * 101) });
        this.setState({ userGuessedNumber: null });
        this.setState({ numberOfTrying: 5 });
        this.setState({ guessingResponse: "Yes, you won!" });
        this.setState({ buttonValue: "Start Guessing Again!" });
      }
    } else {
      this.setState({ randomNumber: Math.floor(Math.random() * 101) });
      this.setState({ numberOfTrying: 5 });
      this.setState({
        guessingResponse: `Game over,  the random number was ${
          this.state.randomNumber
        }`
      });
      this.setState({ buttonValue: "Start Guessing Again!" });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row my-4 justify-content-md-center">
            <div className="col-4 my-3">
              <input
                type="number"
                class="form-control"
                placeholder="Guess number between 0 - 100"
                value={this.state.userGuessedNumber}
                onChange={this.takeUserGuess}
              />
              <br />
              <button
                onClick={() => this.checkTheGuess(this.state.userGuessedNumber)}
                className="btn btn-warning"
              >
                {this.state.buttonValue}
              </button>
              <br />
              <br />
              <div class="card border-dark mb-3" style={{ maxWwidth: "20rem" }}>
                <div class="card-header">{`You have ${
                  this.state.numberOfTrying
                } attempts`}</div>
                <div class="card-body text-dark">
                  <h5 class="card-title">{this.state.guessingResponse}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
