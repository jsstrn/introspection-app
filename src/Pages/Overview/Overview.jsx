import React, { Component } from "react";
import { Container } from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";
import FullChart from "./../../Radar/FullChart";
import Wall from "../../components/Wall/Wall";
import Error from "../../components/Error/Error";
import IntroDataContext from "../../IntroDataContext";
import Loading from "./../../components/Loading/Loading";
import withLoadingAndError from "../../components/withLoadingAndError/withLoadingAndError";

class Overview extends Component {
  render() {
    return (
      <IntroDataContext.Consumer>
        {value => (
          <React.Fragment>
            <HPJumbotron />
            <Container className="mx-auto" style={{ width: "100vw" }}>
              {process.env.REACT_APP_FEATURE_TOGGLE_PIZZA === "true" && (
                <FullChart />
              )}
            </Container>
            <hr />
            <Container className="mx-auto" style={{ width: "100vw" }}>
              {withLoadingAndError(value.isLoading, value.error, <Wall />)}
            </Container>
          </React.Fragment>
        )}
      </IntroDataContext.Consumer>
    );
  }
}

export default Overview;
