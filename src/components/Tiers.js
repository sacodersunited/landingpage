import React from "react";
import { Row, Col } from "reactstrap";
import { FaMedal, FaStar, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

const Description = styled.section`
  min-height: 50px;
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

const Tiers = () => (
  <Row className="row justify-content-between">
    <Col xs={{ size: 12 }} md="4">
      <Description>
        <h4>
          <FaRegStar size="30" /> Bronze Star
        </h4>
      </Description>
      <hr className="bronze-hr" />
      <BgBox>
        <ul>
          <li>3 - 5 Pages</li>
          <li>Custom Design</li>
          <li>Development</li>
          <li>Hosting included</li>
        </ul>
      </BgBox>
    </Col>

    <Col xs={{ size: 12 }} md="4">
      <Description>
        <h4>
          <FaStar size="30" /> Silver Star
        </h4>
      </Description>
      <hr className="silver-hr" />
      <BgBox>
        <ul>
          <li>6-10 pages</li>
          <li>Analytics</li>
          <li>Custom Design</li>
          <li>Development</li>
          <li>Hosting included</li>
        </ul>
      </BgBox>
    </Col>

    <Col xs={{ size: 12 }} md="4">
      <Description>
        <h4>
          <FaMedal size="30" /> Medal of Honor
        </h4>
      </Description>
      <hr className="moh-hr" />

      <BgBox>
        <ul>
          <li>Unlimited pages</li>
          <li>Content Management System</li>
        </ul>
        <p style={{ paddingLeft: "53px" }}>
          <i>* Your team has complete control!</i>
        </p>
      </BgBox>
      <ul>
        <li>All plans require a 50% Down Payment Prior to Project kick off.</li>
      </ul>
    </Col>
  </Row>
);

export default Tiers;
