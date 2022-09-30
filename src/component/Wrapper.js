import React from "react";
import { Row } from "react-bootstrap";
import PokemonInfo from "./pokemon/PokemonInfo";
import PokemonList from "./pokemon/PokemonList";

const Wrapper = () => {
  return (
    <Row>
      <PokemonList />
      <PokemonInfo />
    </Row>
  );
};

export default Wrapper;
