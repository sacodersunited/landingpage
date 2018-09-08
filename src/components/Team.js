import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from 'styled-components';
import frank from "../img/frank.jpg";
import paul from "../img/paul.jpg";

const ImgCardStyle = styled(CardImg)`
  height: 340px;
  object-fit: cover;
`

const Team = props => (
  <Row className="row justify-content-around">
    <Col xs="10" md="4">
      <Card>
        <ImgCardStyle top width="100%" src={frank} alt="Frank's profile" />
        <CardBody>
          <CardTitle>Frank Pigeon</CardTitle>
          <a
            href="https://twitter.com/fpigeonjr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardSubtitle>@fpigeonjr</CardSubtitle>
          </a>
          <CardText>
            U.S. Army veteran. Web Designer and Frontend Developer. Founder.
          </CardText>
        </CardBody>
      </Card>
    </Col>
    <Col xs="10" md="4">
      <Card>
        <ImgCardStyle top width="100%" src={paul} alt="Paul's profile" />
        <CardBody>
          <CardTitle>Paul Castillo</CardTitle>
          <a
            href="https://twitter.com/pcast01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardSubtitle>@pcast01</CardSubtitle>
          </a>
          <CardText>
            U.S. Air Force veteran. Web Developer and Founder.
          </CardText>

        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Team;
