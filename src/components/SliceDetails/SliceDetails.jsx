import React from "react";
import { Button } from "reactstrap";
function SliceDetails(props) {
  const { category } = props;
  return (
    <React.Fragment>
      <div className="mx-auto text-center mt-5">
        <h1 className=" text-info font-weight-bolder mb-5">{`${category}`}</h1>
        <Button
          style={{ marginRight: "1em" }}
          outline
          color="success"
          size="lg"
          active
        >
          2018
        </Button>
        <Button style={{ marginLeft: "1em" }} outline color="success" size="lg">
          2019
        </Button>
      </div>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae
        sint pariatur, delectus harum illo praesentium odit fugiat libero
        recusandae, corporis totam voluptatum voluptate, deserunt dicta? Itaque
        expedita sequi consequatur nesciunt dolores nostrum facere nemo vel
        praesentium, consectetur debitis cum.
      </p>
    </React.Fragment>
  );
}

export default SliceDetails;