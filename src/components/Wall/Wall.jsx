import React, { Component } from "react";
import { Table, Container, Button } from "reactstrap";
import { getCategoryBrick } from "../../services/serveIntrospections";
export default class Wall extends Component {
  state = {
    office: "Singapore"
  };

  render() {
    const { office } = this.state;
    const { categories } = this.props;
    return (
      <Container className="mx-auto mt-5">
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
                {Object.entries(getCategoryBrick(item, office)).map(
                  (num, index) => (
                    <td data-testid={`${item}-${num[0]}`} key={index}>
                      {num[1]}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
