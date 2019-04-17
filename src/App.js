import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Alert from "react-s-alert";
import { introspectionData } from "../src/services/serveIntrospections";

export const IntroDataContext = React.createContext({});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      actions: [],
      error: null,
      isLoading: false,
      value: {
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
      this.setState({
        value: {
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
