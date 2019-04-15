import React from "react";
import { Container } from "reactstrap";

function Brick({ count, handleActions, tablenumber }) {
  return (
    <Container className="mb5">
      <p className="f4 gray fw7">
        <i className="fas fa-user-circle" /> Advocate Leader
      </p>
      <div className="flex w-100 tc gray justify-between">
        <div
          className={`br4 ${
            tablenumber === 0 ? "bg-lightest-blue" : undefined
          } w-30 pointer`}
          onClick={() => handleActions(0)}
        >
          <p className="f5 fw5 mt2">Explore</p>
          <p className="f3 fw7">{count[0]}</p>
        </div>
        <div
          className={`br4 ${
            tablenumber === 1 ? "bg-lightest-blue" : undefined
          } w-30 pointer`}
          onClick={() => handleActions(1)}
        >
          <p className="f5 fw5 mt2">Deepen</p>
          <p className="f3 fw7">{count[1]}</p>

          <img src="img/avatar.png" className=" br-100" width="30" alt="" />
          <p />
        </div>
        <div
          className={`br4 ${
            tablenumber === 2 ? "bg-lightest-blue" : undefined
          } w-30 pointer`}
          onClick={() => handleActions(2)}
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
