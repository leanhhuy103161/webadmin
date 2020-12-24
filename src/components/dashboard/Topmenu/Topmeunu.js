import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Media 
} from 'reactstrap';
import { Redirect } from "react-router-dom"
import {faInfo, faBell, faSortDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Topmenu.css"


const Topmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const logout = () => {
      console.log("calling log out");
      window.localStorage.clear();
   }
  
  return (
    <div className="Topmenu">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/Dashboard"><h6><FontAwesomeIcon icon={faInfo}/>nstagram</h6></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img className="avatar" src={`data:image/jpeg;base64,${localStorage.avatar}`} alt="avatar" width="30" height="30" /> {localStorage.lastName}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Admin Information
                </DropdownItem>
                <DropdownItem>
                  Setting
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/login" onClick={logout}>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topmenu;