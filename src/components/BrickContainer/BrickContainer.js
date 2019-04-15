import React, { Component } from "react";
import Brick from "../Brick/Brick";
import BrickTable from "../BrickTable/BrickTable";
import { getBrickTable } from "../../services/serveIntrospections";

class BrickContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [[], [], []], action: "", brickObject: {} };
  }

  componentDidMount() {
    const { data } = this.state;
    const brickObject = getBrickTable("Singapore", "Diversity and Inclusion");
    const entries = Object.entries(brickObject);
    entries.forEach(([key, val], index) => {
      data[index] = val;
    });

    this.setState({ data, brickObject });
  }

  handleActionSelector = event => {
    console.log(event);
    this.setState({ action: event.target.value });
  };

  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>
        <Brick count={this.state.data.map(a => a.length)} />
        <BrickTable names={this.state.data[2]} />
      </React.Fragment>
    );
  }
}

export default BrickContainer;
