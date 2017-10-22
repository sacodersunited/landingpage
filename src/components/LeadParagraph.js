import React from "react";
import { Row, Col } from "reactstrap";

const LeadParagraph = props => (
  <Row className="justify-content-center">
    <Col xs="6">
      <h1 className="text-center">{props.title}</h1>
      <hr />
      <p>{props.details}</p>
    </Col>
  </Row>
);

export default LeadParagraph;
