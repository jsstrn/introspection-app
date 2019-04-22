import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import React from "react";

export default function withLoadingAndError(
  isLoading,
  error,
  WrappedComponent
) {
  if (isLoading) {
    return <Loading />;
  } else {
    if (!error) {
      return WrappedComponent;
    }
    return <Error />;
  }
}
