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
      <Jumbotron className="text-center">
        <h1 className="display-3">sacodersunited</h1>
        <p className="lead">vets who code</p>

        <Navbar color="faded" light expand="md">
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
      </Jumbotron>
    );
  }
}
export default Header;
