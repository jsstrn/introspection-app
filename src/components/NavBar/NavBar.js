import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "#c3eee7" }} className="pt-4 pb-2">
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
        <NavItem>
          <Link to="/plan">
            <h4 className="text-muted font-weight-bolder">Action Plan</h4>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/admin">
            <h4 className="text-muted font-weight-bolder">Admin Panel</h4>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/slice">
            <h4 className="text-muted font-weight-bolder">Detailed</h4>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/profile">
            <img
              alt="avatar"
              width="50px"
              height="50px"
              src="https://semantic-ui.com/images/avatar2/large/kristy.png"
              className="rounded-circle"
            />
            <span className="text-muted font-weight-bolder"> Esther T.</span>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
