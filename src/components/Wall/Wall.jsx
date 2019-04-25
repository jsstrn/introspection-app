import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import { Link } from "react-router-dom";
import {
  getBrickElement,
  getCategories,
  getAvailableOffices
} from "../../services/serveIntrospections";
import IntroDataContext from "../../IntroDataContext";
import "./Wall.css";
import FilterBar from "../FilterBar/FilterBar.jsx";

export default class Wall extends Component {
  static contextType = IntroDataContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      office: this.context.office
    };
  }

  handleOfficeSelect = office => {
    const officeSelected = office === "All" ? "All" : office;
    this.setState({ office: officeSelected });
  };

  render() {
    const { data, actions } = this.context;
    const { office } = this.state;
    const offices = ["All", ...getAvailableOffices(data)];
    return (
      <Container className="mx-auto mt-5 mb6">
        <div>
          <FilterBar
            handleClick={this.handleOfficeSelect}
            offices={offices}
            selected={office}
            className="actionPlanOfficeFilter"
          />
        </div>
        <h1 className="wall-title text-info text-center font-weight-bolder mb-5">
          {office.toLowerCase() !== "all" ? `${office}'s ` : "All Offices' "}
          Action Plan
        </h1>
        <Table striped>
          <thead>
            <tr>
              <th />
              {actions.map((action, index) => (
                <th className="actionHeader" key={index}>
                  {action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getCategories(data).map((item, index) => (
              <tr key={index}>
                <th scope="row">
                  <Link
                    to={{
                      pathname: `/slice`,
                      state: { office, category: item }
                    }}
                    className="categoryLink"
                  >
                    {item}
                  </Link>
                </th>
                {actions.map((action, index) => (
                  <td data-testid={`${item}-${action}`} key={index}>
                    {getBrickElement(data, office, item, action).length}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
