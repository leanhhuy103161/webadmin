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
} from 'reactstrap';

import {faInfo, faBell, faSortDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Topmenu.css"

const Topmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Topmenu">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/Dashboard"><h6><FontAwesomeIcon icon={faInfo}/>nstagram</h6></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <FontAwesomeIcon icon={faBell}/> Notifcation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Admin Information
                </DropdownItem>
                <DropdownItem>
                  Setting
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                  
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Admin Information
                </DropdownItem>
                <DropdownItem>
                  Setting
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topmenu;