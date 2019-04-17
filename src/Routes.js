import React from "react";
import { Route, Switch } from "react-router-dom";
import Overview from "./Pages/Overview/Overview";
import RadarPage from "./Pages/RadarPage/RadarPage";
import PlanPage from "./Pages/PlanPage/PlanPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import SlicePage from "./Pages/SlicePage/SlicePage";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={Overview} />
        <Route
          path="/slice/:category"
          render={props => <SlicePage {...props} />}
        />
        <Route path="/slice" component={SlicePage} />
        <Route path="/radar" component={RadarPage} />
        <Route path="/plan" component={PlanPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={Overview} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
