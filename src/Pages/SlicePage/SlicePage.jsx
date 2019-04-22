import React from "react";
import { Container, Row } from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";
import SliceDetails from "../../components/SliceDetails/SliceDetails";
import BrickContainer from "../../components/BrickContainer/BrickContainer";

function SlicePage(props) {
  const categoryName = props.match.params.category
    ? props.match.params.category
    : "Equitable Tech";
  return (
    <>
      <HPJumbotron />
      <Container className="mx-auto mb5">
        <Row>
          <SliceDetails category={categoryName} />
        </Row>
        <Row>
          <BrickContainer category={categoryName} />
        </Row>
      </Container>
    </>
  );
}

export default SlicePage;
