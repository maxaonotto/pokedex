import React from "react";
import { Card, Col } from "react-bootstrap";
import pokeball from "../../assets/pokeball.png";

const PokemonItem = ({ data }) => {
  return (
    <Col
      style={{ width: "175px" }}
      className="col-xs-7 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 my-2"
    >
      <Card className="p-2 h-100 w-100 text-center border-dark rounded-0">
        <Card.Img variant="top" src={pokeball} />
        <Card.Body className="p-0 fs-6 text-center text-capitalize">
          <Card.Title className="pt-2">{data.name}</Card.Title>
          <Card.Text>type</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonItem;
