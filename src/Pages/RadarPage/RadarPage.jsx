import React from "react";

import Radar from "../../components/Radar/Radar.js";

function RadarPage() {
  return (
    <React.Fragment>
      {process.env.REACT_APP_FEATURE_TOGGLE_PIZZA === "true" && <Radar />}
    </React.Fragment>
  );
}

export default RadarPage;
