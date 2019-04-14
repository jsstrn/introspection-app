import React from "react";
import { Card, CardTitle, CardDeck, CardSubtitle, CardBody } from "reactstrap";
import { getCategoryBrick } from "../../services/serveIntrospections";

function Brick(props) {
  const { office, categoryName } = props;
  const brick = getCategoryBrick(categoryName, office);
  return (
    <div>
      <h3>
        <i className="fas fa-user-circle" /> Advocate Leader
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
