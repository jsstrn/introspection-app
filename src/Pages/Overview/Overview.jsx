import React, { Component } from "react";
import { Container } from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";
import FullChart from "./../../Radar/FullChart";
import Wall from "../../components/Wall/Wall";
import { getCategoriesByOffice } from "../../services/serveIntrospections";

class Overview extends Component {
  state = {
    office: "Singapore",
    categories: []
  };

  componentDidMount() {
    const categories = getCategoriesByOffice(this.state.office);
    this.setState({ categories });
  }

  render() {
    const { categories, office } = this.state;
    return (
      <React.Fragment>
        <HPJumbotron />
        <Container className="mx-auto" style={{ width: "100vw" }}>
          <FullChart />
        </Container>
        <hr />
        <Container className="mx-auto" style={{ width: "100vw" }}>
          <Wall categories={categories} office={office} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Overview;
