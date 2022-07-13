import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // THE ONLY TIME! we can directly assign to the state object is when we initially define it as seen below.
    this.state = { lat: null, errorMessage: "" };
    //We can add additional properties to update the state with using a "," to separate the properties
  }

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
