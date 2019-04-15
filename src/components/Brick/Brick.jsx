import React from "react";
import { Container } from "reactstrap";

function Brick(props) {
  return (
    <Container className="mb5">
      <p className="f4 gray fw7">
        <i className="fas fa-user-circle" /> Advocate Leader
      </p>
      <div className="flex w-100 tc gray justify-between">
        <div className="br4 bg-lightest-blue w-30">
          <p className="f5 fw5 mt2">Explore</p>
          <p className="f3 fw7">00</p>
          <p />
        </div>
        <div className="br4 bg-lightest-blue w-30">
          <p className="f5 fw5 mt2">Deepen</p>
          <p className="f3 fw7">00</p>

          <img src="img/avatar.png" className=" br-100" width="30" alt="" />
          <p />
        </div>
        <div className="br4 bg-lightest-blue w-30">
          <p className="f5 fw5 mt2">Share</p>
          <p className="f3 fw7">00</p>
          <p />
        </div>
      </div>
    </Container>
  );
}

export default Brick;
