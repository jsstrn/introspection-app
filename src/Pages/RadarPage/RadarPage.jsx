import React from "react";

import FullChart from "../../Radar/FullChart";

function RadarPage() {
  return (
    <React.Fragment>
      {process.env.REACT_APP_FEATURE_TOGGLE_PIZZA === "true" && <FullChart />}
    </React.Fragment>
  );
}

export default RadarPage;
