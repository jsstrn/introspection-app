import React, { Component } from "react";
import { Container } from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";
import FullChart from "./../../Radar/FullChart";
import Wall from "../../components/Wall/Wall";
import Error from "../../components/Error/Error";
import { IntroDataContext } from "../../App";
import Loading from "./../../components/Loading/Loading";

class Overview extends Component {
  state = {
    office: "Singapore"
  };

  renderWall(error, isLoading) {
    if (isLoading) {
      return <Loading />;
    } else {
      if (!error) {
        return <Wall office={this.state.office} />;
      }
      return <Error />;
    }
  }

  render() {
    return (
      <IntroDataContext.Consumer>
        {value => (
          <React.Fragment>
            <HPJumbotron />
            <Container className="mx-auto" style={{ width: "100vw" }}>
              <FullChart />
            </Container>
            <hr />
            <Container className="mx-auto" style={{ width: "100vw" }}>
              {this.renderWall(value.error, value.isLoading)}
            </Container>
          </React.Fragment>
        )}
      </IntroDataContext.Consumer>
    );
  }
}

export default Overview;
