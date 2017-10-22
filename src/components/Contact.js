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
      <ContactForm />
    </Col>
  </Row>
);

export default Contact;
