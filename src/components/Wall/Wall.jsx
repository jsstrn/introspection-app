import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import {
  getBrickElement,
  getCategoriesByOffice
} from "../../services/serveIntrospections";
import IntroDataContext from "../../IntroDataContext";
export default class Wall extends Component {
  render() {
    return (
      <IntroDataContext.Consumer>
        {value => (
          <Container className="mx-auto mt-5 mb6">
            <h1 className="wall-title text-info text-center font-weight-bolder mb-5">
              {`${value.office}'s Action Plan`}
            </h1>
            <Table striped>
              <thead>
                <tr>
                  <th />
                  {value.actions.map((action, index) => (
                    <th key={index}>{action}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getCategoriesByOffice(value.data, value.office).map(
                  (item, index) => (
                    <tr key={index}>
                      <th scope="row">{item}</th>
                      {value.actions.map((action, index) => (
                        <td data-testid={`${item}-${action}`} key={index}>
                          {
                            getBrickElement(
                              value.data,
                              value.office,
                              item,
                              action
                            ).length
                          }
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Container>
        )}
      </IntroDataContext.Consumer>
    );
  }
}
