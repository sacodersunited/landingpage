import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FaCopyright } from "react-icons/fa";

const Footer = () => (
  <Navbar className="navbar-light bg-light">
    <NavbarBrand>
      <FaCopyright style={{ verticalAlign: "middle" }} /> sacodersunited
    </NavbarBrand>
  </Navbar>
);

export default Footer;
