import React from "react";
import { Row, Col } from "reactstrap";
import { FaTrophy, FaPaintBrush, FaFirefox } from "react-icons/fa";
import styled from "styled-components";

const Description = styled.section`
  min-height: 130px;
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
  color: white;
  min-height: 150px;
  padding-top: 10px;
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
`;

const Services = () => (
  <Row className="row justify-content-between">
    <Col xs={{ size: 12 }} md="4">
      <Description>
        <h4>
          <FaPaintBrush size="30" /> Web Design
        </h4>
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
      <Description>
        <h4>
          <FaTrophy size="30" /> Branding
        </h4>
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
      <Description>
        <h4>
          <FaFirefox size="30" /> Web Development
        </h4>
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
