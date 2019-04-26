import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import "./NavBar.css";
import IntroDataContext from "../../IntroDataContext";
import api from "../../services/api";

function NavBar() {
  return (
    <div className="pt-4 pb-2 navcolor">
      <Nav className="d-flex flex-row justify-content-around" navbar>
        <NavItem>
          <Link to="/home" data-testid="homepage-link">
            <h4 className="text-muted font-weight-bolder">
              About Introspection
            </h4>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/radar">
            <h4 className="text-muted font-weight-bolder">
              Introspection Radar
            </h4>
          </Link>
        </NavItem>
        <IntroDataContext.Consumer>
          {({ name, profilePic }) => (
            <React.Fragment>
              <NavItem>
                <a href={`${api}/auth/logout`}>
                  <h4 className="text-muted font-weight-bolder">Logout</h4>
                </a>
              </NavItem>
              {profilePic && (
                <NavItem>
                  <Link to="/profile">
                    <img
                      alt=""
                      width="30px"
                      height="30px"
                      src={profilePic}
                      className="rounded-circle"
                    />
                    <span className="text-muted font-weight-bolder">
                      {name}
                    </span>
                  </Link>
                </NavItem>
              )}
              <NavItem>
                <a href={`${api}/auth/google`}>
                  <h4 className="text-muted font-weight-bolder">Login</h4>
                </a>
              </NavItem>
            </React.Fragment>
          )}
        </IntroDataContext.Consumer>
        <NavItem>
          <Link to="/admin">
            <h4 className="text-muted font-weight-bolder">Admin Panel</h4>
          </Link>
        </NavItem>
        {process.env.REACT_APP_FEATURE_TOGGLE_NAVLINKS === "true" && (
          <>
            <NavItem>
              <Link to="/detailed">
                <h4 className="text-muted font-weight-bolder">Detailed</h4>
              </Link>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  );
}

export default NavBar;
