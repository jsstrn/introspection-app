import React, { Component } from "react";
import Brick from "../Brick/Brick";
import BrickTable from "../BrickTable/BrickTable";
import { getBrickTable } from "../../services/serveIntrospections";

class BrickContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [[], [], []], tablenumber: 0, brickObject: {} };
  }

  componentDidMount() {
    const { data } = this.state;
    const brickObject = getBrickTable("Singapore", "Diversity and Inclusion");
    const entries = Object.entries(brickObject);
    entries.forEach(([key, val], index) => {
      data[index] = val;
    });

    this.setState({ data, brickObject, tablenumber: 0 });
  }

  handleActionSelector = event => {
    this.setState({ tablenumber: event });
  };

  render() {
    const { tablenumber, data } = this.state;

    return (
      <React.Fragment>
        <Brick
          count={this.state.data.map(a => a.length)}
          handleActions={this.handleActionSelector}
          tablenumber={tablenumber}
        />
        <BrickTable names={data[tablenumber]} />
      </React.Fragment>
    );
  }
}

export default BrickContainer;
