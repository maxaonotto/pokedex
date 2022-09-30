import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PokemonInfo from "./pokemon/PokemonInfo";
import PokemonList from "./pokemon/PokemonList";

const Wrapper = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs>
          <PokemonList />
        </Col>
        <Col xs>
          <PokemonInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;
