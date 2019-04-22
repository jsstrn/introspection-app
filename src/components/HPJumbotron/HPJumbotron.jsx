import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./HPJumbotron.css";

function HPJumbotron() {
  return (
    <Jumbotron fluid className="jumbotron">
      <p className="mx-auto button">
        <Button color="info" className="btn btn-lg btn-circle">
          <a href="https://forms.gle/NwP2eNX1UVB42DeP8">Take the Survey</a>
        </Button>
      </p>
    </Jumbotron>
  );
}

export default HPJumbotron;
