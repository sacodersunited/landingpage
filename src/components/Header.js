import React from "react";
import {
  Jumbotron,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import styled from "styled-components";
// import flag from "../img/flag.png";
import vidSrc from "../img/Flag Of USA.mp4";

const fadedWhite = "rgba(255, 255, 255, 0.75)";

const StyledJumbotron = styled(Jumbotron)`
  margin-bottom: 0;
  background-size: cover;
  color: ${fadedWhite};
  background-color: #425173;
  h1 {
    color: white;
  }
  @media (max-width: 575.98px) {
    h1 {
      font-size: 3rem;
      font-weight: 300;
      line-height: 1.2;
    }
  }
`;

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
      <React.Fragment>
        <video
          id="video"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5
          }}
        >
          <source src={vidSrc} type="video/mp4" />
        </video>
        <StyledJumbotron className="text-center flag-bg">
          <h1 className="display-3">SA Coders United</h1>
          <p className="lead">vets who code</p>

          <Navbar color="faded" dark expand="md" style={{ zIndex: 1 }}>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#team">Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </StyledJumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
