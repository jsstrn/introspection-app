import React from "react";
import { Container } from "reactstrap";

function Brick({ handleActions, tableKey, brickObject, levelArray }) {
  const entries = Object.entries(brickObject);
  return (
    <Container className="mb5">
      <div className="flex w-80 mx-auto tc gray justify-between">
        {entries.map(([key, val], index) => {
          return (
            <div
              className={`br4 ${
                tableKey === key ? "bg-lightest-blue" : undefined
              } w-20 pointer`}
              onClick={() => handleActions(key)}
              key={index}>
              <p className="f5 fw5 mt2">{key.replace("would like to", "")}</p>
              <p className="f3 fw7" data-testid={`action-val-${index}`}>
                {val.length}
              </p>
            </div>
          );
        })}
        {
          <div
            className={`br4 ${
              tableKey === "Activated Individuals"
                ? "bg-lightest-blue"
                : undefined
            } w-20 pointer`}
            onClick={() => handleActions("Activated Individuals")}>
            <p className="f5 fw5 mt2">Activated Individuals</p>
            <p className="f3 fw7" data-testid={"Activated"}>
              {levelArray.length}
            </p>
          </div>
        }
      </div>
    </Container>
  );
}

export default Brick;
