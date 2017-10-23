import React from "react";
import { Row, Col } from "reactstrap";

const LeadParagraph = props => (
  <Row className="justify-content-center">
    <Col xs="12" sm="10" lg="6">
      <h1 className="text-center">{props.title}</h1>
      <Row className="justify-content-center">
        <Col xs="2">
          <hr className="lead-p-hr" />
        </Col>
      </Row>
      <p>{props.details}</p>
    </Col>
  </Row>
);

export default LeadParagraph;
