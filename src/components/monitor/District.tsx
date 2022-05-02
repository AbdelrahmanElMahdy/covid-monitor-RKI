import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DistrictProps } from "../../types/types";

export interface MonitorProps {
  name: string;
}

export default function District(props: DistrictProps) {
  return (
    <Container>
      <Row className="m-5">
        <Col className="text-center">
          <div className="country-name">{props.district} Statistics</div>
        </Col>
      </Row>
    </Container>
  );
}
