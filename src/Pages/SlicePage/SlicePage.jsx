import React from "react";
import { Container, Row, Col } from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";

import SliceDetails from "../../components/SliceDetails/SliceDetails";
import BrickContainer from "../../components/BrickContainer/BrickContainer";

function SlicePage(props) {
  const categoryName = "Religious Minorities";
  const office = "Singapore";
  return (
    <>
      <HPJumbotron />
      <Container className="mx-auto mb7">
        <Row>
          <SliceDetails category={categoryName} />
        </Row>
        <Row>
          <Col xs="12" md="6" />
          <Col xs="12" md="6">
            <BrickContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SlicePage;
