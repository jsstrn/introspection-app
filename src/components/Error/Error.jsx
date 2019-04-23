import React from "react";

function Error({error}) {
  return (
    <div data-cy="error">
      <h1>{error.message}</h1>
    </div>
  );
}

export default Error;
