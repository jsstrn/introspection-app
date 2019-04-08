import React, { Component } from "react";
import { Container } from "reactstrap";
import Scatter from "./Scatter";

class FullChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="mx-auto text-center mt-5">
        <h1 className="text-info font-weight-bolder">
          Singapore's Introspection Radar
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
