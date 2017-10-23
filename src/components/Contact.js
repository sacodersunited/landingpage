import React from "react";
import { Row, Col } from "reactstrap";
import laptop from "../img/laptop.png";
import ContactForm from "./ContactForm";

const Contact = () => (
  <Row>
    <Col>
      <img src={laptop} alt="laptop" />
    </Col>
    <Col>
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
