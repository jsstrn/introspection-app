import React from "react";
import { Container } from "reactstrap";

function Brick({ count, handleActions }) {
  return (
    <Container className="mb5">
      <p className="f4 gray fw7">
        <i className="fas fa-user-circle" /> Advocate Leader
      </p>
      <div className="flex w-100 tc gray justify-between">
        <div
          className="br4 bg-lightest-blue w-30 pointer"
          value="explore"
          onClick={() => handleActions()}
        >
          <p className="f5 fw5 mt2">Explore</p>
          <p className="f3 fw7">{count[0]}</p>
          <p />
        </div>
        <div
          className="br4 bg-lightest-blue w-30"
          value="deepen"
          onClick={() => handleActions()}
        >
          <p className="f5 fw5 mt2">Deepen</p>
          <p className="f3 fw7">{count[1]}</p>

          <img src="img/avatar.png" className=" br-100" width="30" alt="" />
          <p />
        </div>
        <div
          className="br4 bg-lightest-blue w-30"
          value="share"
          onClick={() => handleActions()}
        >
          <p className="f5 fw5 mt2">Share</p>
          <p className="f3 fw7">{count[2]}</p>
          <p />
        </div>
      </div>
    </Container>
  );
}

export default Brick;
