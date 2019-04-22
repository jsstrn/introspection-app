import React from "react";

function SliceDetails(props) {
  const { category } = props;
  return (
    <React.Fragment>
      <div className="mx-auto text-center mt-5">
        <h1 className=" text-info font-weight-bolder mb-5">{`${category}`}</h1>
      </div>
    </React.Fragment>
  );
}

export default SliceDetails;
