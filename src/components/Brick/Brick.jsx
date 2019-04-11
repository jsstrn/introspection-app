import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCategoryBrick } from "../../services/serveIntrospections";

function Brick(props) {
  const { office, categoryName } = props;
  const brick = getCategoryBrick(categoryName, office);
  return (
    <div>
      <h3>
        <FontAwesomeIcon icon="user-circle" /> Advocate Leader
      </h3>
      <CardDeck>
        {Object.entries(brick.action).map(([key, value], index) => (
          <Card key={index}>
            <CardBody>
              <CardTitle>{key}</CardTitle>
              <CardSubtitle>{value}</CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}

export default Brick;
