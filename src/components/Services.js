import React from "react";
import { Row, Col } from "reactstrap";
import FaPaintBrush from "react-icons/lib/fa/paint-brush";
import FaAndroid from "react-icons/lib/fa/android";
import FaTrophy from "react-icons/lib/fa/trophy";
import FaFirefox from "react-icons/lib/fa/firefox";

const Services = () => (
  <Row>
    <Col xs="6" md="3">
      <h4>
        <FaPaintBrush size="30" /> Web Design
      </h4>
      <p>
        moon williamsburg bicycle rights, brunch food truck master cleanse wolf
        messenger bag cardigan glossier
      </p>
      <hr />
      <ul>
        <li>thing 1</li>
        <li>thing 2</li>
        <li>thing 3</li>
        <li>thing 4</li>
      </ul>
    </Col>

    <Col xs="6" md="3">
      <h4>
        <FaAndroid size="30" /> App Development
      </h4>
      <p>
        moon williamsburg bicycle rights, brunch food truck master cleanse wolf
        messenger bag cardigan glossier
      </p>
      <hr />
      <ul>
        <li>thing 1</li>
        <li>thing 2</li>
        <li>thing 3</li>
        <li>thing 4</li>
      </ul>
    </Col>

    <Col xs="6" md="3">
      <h4>
        <FaTrophy size="30" /> Branding
      </h4>
      <p>
        moon williamsburg bicycle rights, brunch food truck master cleanse wolf
        messenger bag cardigan glossier
      </p>
      <hr />
      <ul>
        <li>thing 1</li>
        <li>thing 2</li>
        <li>thing 3</li>
        <li>thing 4</li>
      </ul>
    </Col>

    <Col xs="6" md="3">
      <h4>
        <FaFirefox size="30" /> Web Development
      </h4>
      <p>
        moon williamsburg bicycle rights, brunch food truck master cleanse wolf
        messenger bag cardigan glossier
      </p>
      <hr />
      <ul>
        <li>thing 1</li>
        <li>thing 2</li>
        <li>thing 3</li>
        <li>thing 4</li>
      </ul>
    </Col>
  </Row>
);

export default Services;
