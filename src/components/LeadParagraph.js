import React from "react";
import { Row, Col, Jumbotron, Container } from "reactstrap";
import styled from "styled-components";

const StyledJumbotron = styled(Jumbotron)`
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
  h1 {
    color: white;
  }
`;

const LeadParagraph = ({ title, details }) => (
  <StyledJumbotron className="mb-5 mt-5" fluid>
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="12" sm="10" lg="6">
          <h1 className="text-center">{title}</h1>
          <Row className="justify-content-center">
            <Col xs="2">
              <hr className="thick-hr lead-p-hr" />
            </Col>
          </Row>
          {title === "Who We Are" ? (
            <>
              <p className="lead">
                We are a group of veterans who are passionate about technology.
              </p>
              <p className="lead">
                We are programmers and designers who never stop learning.
              </p>
              <p className="lead">
                As veterans, we strive to provide superior service to American
                businesses.
              </p>
              <p className="lead">We are living the American dream.</p>
              <p className="lead">We are SACodersUnited.</p>
            </>
          ) : (
            <p className="lead">{details}</p>
          )}
        </Col>
      </Row>
    </Container>
  </StyledJumbotron>
);

export default LeadParagraph;
