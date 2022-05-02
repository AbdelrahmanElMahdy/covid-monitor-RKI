import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StateProps } from "../../types/types";

export default function State(props: StateProps) {

  return (
    <Container>
      <Row className="m-5">
        <Col className="text-center">
          <div className="country-name">{props.state} Statistics</div>
        </Col>
      </Row>
    </Container>
  );
}
