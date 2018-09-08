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

const LeadParagraph = props => (
  <StyledJumbotron fluid>
    <Container fluid>
    <Row className="justify-content-center">
      <Col xs="12" sm="10" lg="6">
        <h1 className="text-center">{props.title}</h1>
        <Row className="justify-content-center">
          <Col xs="2">
            <hr className="thick-hr lead-p-hr" />
          </Col>
        </Row>
        <p>{props.details}</p>
      </Col>
    </Row>
    </Container>
  </StyledJumbotron>
);

export default LeadParagraph;
