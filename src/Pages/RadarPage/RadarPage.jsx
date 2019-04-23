import React from "react";
import { Container } from "reactstrap";
import Radar from "../../components/Radar/Radar.js";
import IntroDataContext from "../../IntroDataContext";
import withLoadingAndError from "../../components/withLoadingAndError/withLoadingAndError";

const RadarPage = () => {
  return (
    <IntroDataContext.Consumer>
      {value => (
        <React.Fragment>
          <Container className="mx-auto" style={{ width: "100vw" }}>
            {process.env.REACT_APP_FEATURE_TOGGLE_PIZZA === "true" &&
              withLoadingAndError(value.isLoading, value.error, <Radar />)}
          </Container>
        </React.Fragment>
      )}
    </IntroDataContext.Consumer>
  );
};

export default RadarPage;
