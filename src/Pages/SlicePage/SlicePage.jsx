import React from "react";
import { Container, Row } from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";
import SliceDetails from "../../components/SliceDetails/SliceDetails";
import BrickContainer from "../../components/BrickContainer/BrickContainer";

function SlicePage(props) {
  const categoryName = props.location.category
    ? props.location.category
    : "Equitable Tech";

  const office = props.location.office ? props.location.office : "All";

  return (
    <>
      <HPJumbotron />
      <Container className="mx-auto mb5">
        <Row>
          <SliceDetails category={categoryName} />
        </Row>
        <Row>
          <BrickContainer category={categoryName} office={office} />
        </Row>
      </Container>
    </>
  );
}

export default SlicePage;
