import React, { Component } from "react";
import { Table, Container, Button } from "reactstrap";
import { getBrickElement } from "../../services/serveIntrospections";
import { IntroDataContext } from "./../../App";
export default class Wall extends Component {
  state = {
    office: "Singapore"
  };

  actions = [
    "would like to explore",
    "would like to deepen",
    "would like to share"
  ];

  render() {
    const { office } = this.state;
    const { categories } = this.props;
    return (
      <IntroDataContext.Consumer>
        {value => (
          <Container className="mx-auto mt-5 mb6">
            {console.log(value)}
            <h1 className="text-info text-center font-weight-bolder mb-5">
              {`${office}'s Action Plan`}
            </h1>
            <div className="text-center mb-5">
              <Button
                style={{ marginRight: "1em" }}
                outline
                color="success"
                size="lg"
                active>
                2018
              </Button>
              <Button
                style={{ marginLeft: "1em" }}
                outline
                color="success"
                size="lg">
                2019
              </Button>
            </div>
            <Table striped>
              <thead>
                <tr>
                  <th />
                  <th>Explore</th>
                  <th>Deepen</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <i className="fas fa-user-circle" /> {item}
                    </th>
                    {this.actions.map((action, index) => (
                      <td data-testid={`${item}-${action}`} key={index}>
                        {getBrickElement(office, item, action).length}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        )}
      </IntroDataContext.Consumer>
    );
  }
}
