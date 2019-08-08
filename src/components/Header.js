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
import flag from "../img/flag.png";
// import USFlagVid from "../img/us-flag.mp4";

const fadedWhite = "rgba(255, 255, 255, 0.75)";

const StyledJumbotron = styled(Jumbotron)`
  margin-bottom: 0;
  background-image: url(${flag});
  background-size: cover;
  color: ${fadedWhite};
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

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 20%;
  width: auto;
  height: 200px;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background: url("//demosthenes.info/assets/images/polina.jpg") no-repeat;
  background-size: cover;
  transition: 1s opacity;
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
        {/* <Video loop autoPlay muted playsInline>
          <source src={USFlagVid} type="video/mp4" />
        </Video> */}
        <StyledJumbotron className="text-center flag-bg">
          <h1 className="display-3">sacodersunited</h1>
          <p className="lead">vets who code</p>

          <Navbar color="faded" dark expand="md">
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
