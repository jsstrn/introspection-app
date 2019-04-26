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
    this.updateIntros = async () => {
      try {
        // eslint-disable-next-line
        const regexUser = /(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/gm;

        const regexProfile = new RegExp(
          "(?:(?:^|.*;s*)pictures*=s*([^;]*).*$)|^.*$"
        );
        let userVal = unescape(document.cookie.replace(regexUser, "$1"));
        let profileLink = unescape(document.cookie.replace(regexProfile, "$1"));
        const data = await introspectionData("introspection");
        const actions = await introspectionData("actions");

        if (data.length === 0 || actions.length === 0) {
          throw new Error("No data available");
        }

        this.setState({
          value: {
            name: userVal,
            profilePic: profileLink,
            office: "Singapore",
            data,
            actions,
            isLoading: false,
            updateIntros: this.updateIntros
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
    };
  }

  async componentDidMount() {
    await this.updateIntros();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <IntroDataContext.Provider value={this.state.value}>
            <NavBar />
            <Routes />
          </IntroDataContext.Provider>
          <Alert />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
