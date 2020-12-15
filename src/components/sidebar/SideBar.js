import React from "react";
import {
  faChalkboard,
  faTable,
  faCogs,
  faChartArea,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SideBar.css"
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="SideBar">
      <Nav vertical>
        <NavItem>
          <NavLink href="#">
            <h6><FontAwesomeIcon icon={faUserTie}/> Admin</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dashboard">
            <h6><FontAwesomeIcon icon={faChalkboard}/> Dashboard</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <h6><FontAwesomeIcon icon={faTable}/> Table</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <h6><FontAwesomeIcon icon={faChartArea}/> Analytics</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <h6><FontAwesomeIcon icon={faCogs}/> Setting</h6>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default SideBar;