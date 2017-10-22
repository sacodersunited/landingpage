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
import frank from "../img/fpigeonjr-profile.png";
import paul from "../img/pcast-profile.png";

const Team = props => (
  <Row className="row justify-content-around">
    <Col sm="4">
      <Card>
        <CardImg top width="100%" src={frank} alt="Card image cap" />
        <CardBody>
          <CardTitle>Frank Pigeon</CardTitle>
          <CardSubtitle>@fpigeonjr</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Team;
