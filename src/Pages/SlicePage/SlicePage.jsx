import React from "react";
import { Container, Row, Col } from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";
import Brick from "../../components/Brick/Brick";
import SliceDetails from "../../components/SliceDetails/SliceDetails";

function SlicePage(props) {
  const categoryName = "Religious Minorities";
  const office = "Singapore";
  return (
    <>
      <HPJumbotron />
      <Container className="mx-auto">
        <Row>
          <SliceDetails category={categoryName} />
        </Row>
        <Row>
          <Col xs="12" md="6" />
          <Col xs="12" md="6">
            <Brick categoryName={categoryName} office={office} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SlicePage;
