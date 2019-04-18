import React, { Component } from "react";
import { Container } from "reactstrap";
import Scatter from "./Scatter";

class FullChart extends Component {
  render() {
    return (
      <Container className="mx-auto text-center mt-5">
        <h1 className="radar-title text-info font-weight-bolder">
          {this.props.office}'s Introspection Radar
        </h1>
        <Scatter
          sector={[0, 360]}
          background={"full-radar-no-color"}
          bgposition={[0.5, 1.016, 1.05]}
        />
      </Container>
    );
  }
}

export default FullChart;
