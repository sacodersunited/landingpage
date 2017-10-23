import React from "react";
import {
  Jumbotron,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
<<<<<<< HEAD
=======
import styled from "styled-components";
import flag from "../img/flag.png";

const fadedWhite = "rgba(255, 255, 255, 0.75)";

const StyledJumbotron = styled(Jumbotron)`
  background-image: url(${flag});
  background-size: cover;
  color: ${fadedWhite};
  h1 {
    color: white;
  }
`;
>>>>>>> 3f76d5d4d85b297700a5716366afd275e0635255

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
<<<<<<< HEAD
      <Jumbotron className="text-center">
        <h1 className="display-3">sacodersunited</h1>
        <p className="lead">vets who code</p>

        <Navbar color="faded" light expand="md">
=======
      <StyledJumbotron className="text-center flag-bg">
        <h1 className="display-3">sacodersunited</h1>
        <p className="lead">vets who code</p>

        <Navbar color="faded" dark expand="md">
>>>>>>> 3f76d5d4d85b297700a5716366afd275e0635255
          <NavbarBrand href="/">sacodersunited</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
<<<<<<< HEAD
      </Jumbotron>
=======
      </StyledJumbotron>
>>>>>>> 3f76d5d4d85b297700a5716366afd275e0635255
    );
  }
}
export default Header;
