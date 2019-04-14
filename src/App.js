import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Alert from "react-s-alert";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Routes />
          <Alert />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
