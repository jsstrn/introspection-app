import React from "react";

function getErrorMsg(error, statusCode) {
  switch (statusCode) {
    case 401:
      return error.response.data;
    default:
      return error.message;
  }
}

function Error(props) {
  const { error } = props;
  const { statusCode } = error;

  return (
    <div data-cy="error">
      <h1>{getErrorMsg(error, statusCode)}</h1>
    </div>
  );
}

export default Error;
