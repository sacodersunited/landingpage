import React from "react";
import { Container, Row, Col } from "reactstrap";

const LeadParagraph = props => (
  <Container>
    <Row className="justify-content-center">
      <Col xs="6">
        <h1 className="text-center">{props.title}</h1>
        <hr />
        <p>{props.details}</p>
      </Col>
    </Row>
  </Container>
);

export default LeadParagraph;
