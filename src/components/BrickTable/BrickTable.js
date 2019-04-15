import React from "react";
import { Container } from "reactstrap";

const BrickTable = ({ names }) => {
  const length = names.length;
  const third = Math.ceil(length / 3);

  return (
    <Container>
      <p className="gray fw7">Explore</p>
      <div className="flex tc gray justify-around">
        <div className="w-third">
          {names.slice(0, third).map((a, index) => (
            <p key={index}>{a}</p>
          ))}
        </div>
        <div className="w-third">
          {names.slice(third, 2 * third).map((a, index) => (
            <p key={index}>{a}</p>
          ))}
        </div>
        <div className="w-third">
          {names.slice(2 * third, names.length).map((a, index) => (
            <p key={index}>{a}</p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BrickTable;
