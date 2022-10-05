import React from "react";
import { Card, Col, Form } from "react-bootstrap";
import { setPokemonTypeBg } from "../../util/setPokemonTypeBg";

const PokemonItem = ({ data, pokeInfo }) => {
  return (
    <Col
      style={{ width: "225px", cursor:"pointer" }}
      className="m-auto px-2 mb-2 
      col-xs-7 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2"
    >
      <Card
        key={data.id}
        onClick={() => pokeInfo(data)}
        className="p-2 h-100 w-100 text-center border-dark rounded-0"
      >
        <Card.Img variant="top" src={data.sprites.front_default} />
        <Card.Body className="p-0 fs-6 text-center text-capitalize">
          <Card.Title className="pt-2">{data.name}</Card.Title>
          <Form className="d-flex justify-content-around">
            {data.types.map((poke) => {
              return (
                <Form.Label
                  key={poke.slot}
                  className={`rounded px-2 py-1 fw-bold 
                  bg-${setPokemonTypeBg(poke.type.name)}`}
                >
                  {poke.type.name}
                </Form.Label>
              );
            })}
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonItem;
