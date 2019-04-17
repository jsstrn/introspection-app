import React from "react";
import { Container } from "reactstrap";

function Brick({ count, handleActions, tablenumber, brickObject }) {
  const entries = Object.entries(brickObject);
  return (
    <Container className="mb5 ">
      <p className="f4 gray fw7">
        <i className="fas fa-user-circle" /> Advocate Leader
      </p>
      <div className="flex w-100 tc gray justify-between">
        {entries.map(([key, val], index) => {
          return (
            <div
              className={`br4 ${
                tablenumber === index ? "bg-lightest-blue" : undefined
              } w-30 pointer`}
              onClick={() => handleActions(index)}
              key={index}
            >
              <p className="f5 fw5 mt2">{key.replace("would like to", "")}</p>
              <p className="f3 fw7" data-testid={`action-val-${index}`}>
                {val.length}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Brick;
