import React from "react";

function getErrorMsg(error) {
  switch (error) {
    case "Request failed with status code 401":
      return "Please login.";
    default:
      return error.message;
  }
}

function Error(props) {
  const { error } = props;

  return (
    <div data-cy="error">
      <h1>{getErrorMsg(error)}</h1>
    </div>
  );
}

export default Error;
