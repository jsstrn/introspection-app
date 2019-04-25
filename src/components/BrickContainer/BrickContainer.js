import React, { Component } from "react";
import Brick from "../Brick/Brick";
import BrickTable from "../BrickTable/BrickTable";
import {
  getBrickTable,
  getLevelTable
} from "../../services/serveIntrospections";
import IntroDataContext from "../../IntroDataContext";

class BrickContainer extends Component {
  static contextType = IntroDataContext;
  constructor(props, context) {
    super(props, context);
    this.state = { tableKey: "", office: this.props.office };
  }

  handleActionSelector = key => {
    this.setState({ tableKey: key });
  };

  render() {
    const { data, actions } = this.context;
    const { office } = this.state;
    const { category } = this.props;
    let { tableKey } = this.state;
    const brickObject = getBrickTable(data, office, category, actions);
    if (!tableKey) {
      tableKey = Object.keys(brickObject)[0];
    }
    const levelArray = getLevelTable(data, office, category, "4. Activated");

    const getPeople = () => {
      if (this.state.tableKey === "Activated Individuals") {
        return levelArray;
      } else {
        return brickObject[tableKey] ? brickObject[tableKey] : [];
      }
    };

    return (
      <React.Fragment>
        <Brick
          brickObject={brickObject}
          levelArray={levelArray}
          handleActions={this.handleActionSelector}
          tableKey={tableKey}
        />
        <BrickTable people={getPeople()} tableTitle={tableKey} />
      </React.Fragment>
    );
  }
}

export default BrickContainer;
