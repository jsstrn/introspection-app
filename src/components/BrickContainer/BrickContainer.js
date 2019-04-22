import React, { Component } from "react";
import Brick from "../Brick/Brick";
import BrickTable from "../BrickTable/BrickTable";
import { getBrickTable } from "../../services/serveIntrospections";
import IntroDataContext from "../../IntroDataContext";

class BrickContainer extends Component {
  static contextType = IntroDataContext;
  constructor(props, context) {
    super(props, context);
    this.state = { tableKey: "" };
  }

  handleActionSelector = key => {
    this.setState({ tableKey: key });
  };

  componentDidMount() {
    console.log("mounting the comppnent", this.context);
  }
  componentDidUpdate() {
    console.log("updating the comppnent", this.context);
  }
  render() {
    const { office, data, actions } = this.context;
    const { category } = this.props;
    let { tableKey } = this.state;

    const brickObject = getBrickTable(data, office, category, actions);
    if (!tableKey) {
      console.log(tableKey);
      console.log(brickObject);
      tableKey = Object.keys(brickObject)[0];
    }
    console.log(tableKey);
    return (
      <React.Fragment>
        <Brick
          brickObject={brickObject}
          count={data.map(a => a.length)}
          handleActions={this.handleActionSelector}
          tableKey={tableKey}
        />
        <BrickTable
          names={brickObject[tableKey] ? brickObject[tableKey] : []}
          tableTitle={tableKey}
        />
      </React.Fragment>
    );
  }
}

export default BrickContainer;
