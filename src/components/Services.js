import React from "react";
import { Row, Col } from "reactstrap";
import FaPaintBrush from "react-icons/lib/fa/paint-brush";
import FaTrophy from "react-icons/lib/fa/trophy";
import FaFirefox from "react-icons/lib/fa/firefox";
import styled from "styled-components";

const Description = styled.p`
  min-height: 120px;
  margin-top: 0;
  margin-bottom: 1rem;
  border: 1px solid grey;
  padding: 10px;
  margin-bottom: -16px;
  border-bottom: none;
  border-radius: 2px;
`;
const BgBox = styled.div`
  margin-top: -16px;
  background-color: #333c33;
  color: white;
  min-height: 150px;
  padding-top: 10px;
`;

const Services = () => (
  <Row className="row justify-content-between">
    <Col xs={{ size: 12 }} md="4">
      <h4>
        <FaPaintBrush size="30" /> Web Design
      </h4>
      <Description>
        Design is paying attention to detail and letting no detail be
        overlooked.
      </Description>
      <hr className="thick-hr" />
      <BgBox>
        <ul>
          <li>Web Layout</li>
          <li>UI/UX</li>
          <li>Mockups</li>
          <li>Design Reviews</li>
        </ul>
      </BgBox>
    </Col>

    <Col xs={{ size: 12 }} md="4">
      <h4>
        <FaTrophy size="30" /> Branding
      </h4>
      <Description>
        Branding is important for your project to reflect who you are and make
        the biggest impact to your target audience.
      </Description>
      <hr className="thick-hr" />
      <BgBox>
        <ul>
          <li>Logo Design</li>
          <li>Branding Guide</li>
          <li>Digital Illustration</li>
        </ul>
      </BgBox>
    </Col>

    <Col xs={{ size: 12 }} md="4">
      <h4>
        <FaFirefox size="30" /> Web Development
      </h4>
      <Description>
        We have to know how to bring your ideas to life using the latest
        technologies and frameworks.
      </Description>
      <hr className="thick-hr" />

      <BgBox>
        <ul>
          <li>Content Management</li>
          <li>Hosting</li>
          <li>Deployment</li>
          <li>Ecommerce</li>
        </ul>
      </BgBox>
    </Col>
  </Row>
);

export default Services;
