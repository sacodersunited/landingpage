import React from "react";
import { Row, Col } from "reactstrap";
import laptop from "../img/laptop.png";
import ContactForm from "./ContactForm";
import styled from "styled-components";

const ThickHr = styled.hr`
  border-top: 3px solid rgba(0, 0, 0, 0.1);
`;

const Contact = () => (
  <Row>
    <Col xs="12" md="6">
      <img class="img-fluid" src={laptop} alt="laptop" />
    </Col>
    <Col xs="12" md="6">
      <h1 className="text-center">Contact Us</h1>
      <Row className="justify-content-center">
        <Col xs="2">
          <ThickHr/>
        </Col>
      </Row>
      <p>Send us a message.</p>
      <ContactForm />
    </Col>
  </Row>
);

export default Contact;
