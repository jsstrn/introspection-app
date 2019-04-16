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
    this.state = { data: [] };
  }
  async componentDidMount() {
    const data = await introspectionData();
    this.setState({ data });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <IntroDataContext.Provider value={this.state.data}>
            {" "}
            <Routes />
          </IntroDataContext.Provider>
          <Alert />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
