import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Alert from "react-s-alert";
import { introspectionData } from "../src/services/serveIntrospections";
import IntroDataContext from "./IntroDataContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        office: "",
        data: [],
        actions: [],
        error: null,
        isLoading: true
      }
    };
  }

  async componentDidMount() {
    try {
      const data = await introspectionData("introspection");
      const actions = await introspectionData("actions");

      if (data.length === 0 || actions.length === 0) {
        throw new Error("No data available");
      }

      this.setState({
        value: {
          office: "Singapore",
          data,
          actions,
          isLoading: false
        }
      });
    } catch (error) {
      this.setState({
        value: {
          error,
          isLoading: false
        }
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <IntroDataContext.Provider value={this.state.value}>
            <Routes />
          </IntroDataContext.Provider>
          <Alert />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
