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
import frank from "../img/frank.jpg";
import paul from "../img/pcast-profile.png";

const Team = props => (
  <Row className="row justify-content-around">
    <Col sm="4">
      <Card>
        <CardImg top width="100%" src={frank} alt="Card image cap" />
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
    <Col sm="4">
      <Card>
        <CardImg top width="100%" src={paul} alt="Card image cap" />
        <CardBody>
          <CardTitle>Paul Castillo</CardTitle>
          <CardSubtitle>@pcast01</CardSubtitle>
          <CardText>
            U.S. Air Force veteran. Web Developer and Founder.
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Team;
