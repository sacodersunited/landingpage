import React from "react";
import { Row, Col } from "reactstrap";

const LeadParagraph = props => (
  <Row className="justify-content-center">
<<<<<<< HEAD
    <Col xs="6">
      <h1 className="text-center">{props.title}</h1>
      <hr />
=======
    <Col xs="12" sm="10" lg="6">
      <h1 className="text-center">{props.title}</h1>
      <Row className="justify-content-center">
        <Col xs="2">
          <hr className="lead-p-hr" />
        </Col>
      </Row>
>>>>>>> 3f76d5d4d85b297700a5716366afd275e0635255
      <p>{props.details}</p>
    </Col>
  </Row>
);

export default LeadParagraph;
