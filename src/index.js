import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // Alternative way to initialize the state -  Declaring the state on the constructor isn't necessary.
  state = { lat: null, errorMessage: "" };
  // Using this abreviated syntax is equal to the initial state initialization and is processed by babel.

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
