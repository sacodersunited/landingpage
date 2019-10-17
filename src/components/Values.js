import React from "react";
import { Row, Col } from "reactstrap";
import { FaAngleDoubleUp } from "react-icons/fa";

const Values = () => (
  <Row>
    <Col xs="12" md="3">
      <h4>
        <FaAngleDoubleUp color="var(--yellow)" size="24" />
        HONOR
      </h4>
      <p>
        People who develop the habit of being honorable solidify that habit with
        every value choice they make. Honor is a matter of carrying out, acting,
        and living these values everday. To us at SA Coders United, Honor is one
        of our highest values.
      </p>
    </Col>

    <Col xs="12" md="3">
      <h4>
        <FaAngleDoubleUp color="var(--yellow)" size="24" />
        RESPECT
      </h4>
      <p>
        Treat people as they should be treated. In the Soldier’s Code, we pledge
        to “treat others with dignity and respect while expecting others to do
        the same.” Respect is what allows us to appreciate the best in other
        people.
      </p>
    </Col>

    <Col xs="12" md="3">
      <h4>
        <FaAngleDoubleUp color="var(--yellow)" size="24" />
        LOYALTY
      </h4>
      <p>
        Bearing true faith and allegiance is a matter of believing in and
        devoting yourself to something or someone. SA Coders United will be
        loyal to you and your project. We will see it to the end.
      </p>
    </Col>

    <Col xs="12" md="3">
      <h4>
        <FaAngleDoubleUp color="var(--yellow)" size="24" />
        DUTY
      </h4>
      <p>
        Fulfill your obligations. Duty means being able to accomplish tasks as
        part of a team. SA Coders United is one team and each of us has
        something to contribute.
      </p>
    </Col>
  </Row>
);

export default Values;
