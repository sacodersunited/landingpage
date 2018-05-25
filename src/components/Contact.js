import React from "react";
import { Row, Col } from "reactstrap";
import laptop from "../img/laptop.png";
import ContactForm from "./ContactForm";

const Contact = () => (
  <Row>
    <Col xs="12" md="6">
      <img class="img-fluid" src={laptop} alt="laptop" />
    </Col>
    <Col xs="12" md="6">
      <h1 className="text-center">Contact Us</h1>
      <Row className="justify-content-center">
        <Col xs="2">
          <hr className="lead-p-hr" />
        </Col>
      </Row>
      <p>Send us a message.</p>
      <ContactForm />
    </Col>
  </Row>
);

export default Contact;
