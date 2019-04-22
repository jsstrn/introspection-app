import React from "react";
import { Container, Table } from "reactstrap";

const BrickTable = ({ people, tableTitle }) => {
  return (
    <Container className="w-80 mx-auto">
      <div>
        <p className="gray fw7 tc">{tableTitle}</p>
      </div>
      <div className="flex tc gray">
        <Table responsive borderless>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.office}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default BrickTable;
