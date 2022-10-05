import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import usePokemonList from "../hook/usePokemonList";
import PokemonInfo from "./pokemon/PokemonInfo";
import PokemonList from "./pokemon/PokemonList";

const Wrapper = () => {
  const [pokemon, loading] = usePokemonList();
  const [pokedex, setPokedex] = useState();

  if (loading) return "Loading.....";
  return (
    <Container fluid>
      <Row>
        <Col xs>
          <PokemonList data={pokemon} pokeInfo={(poke) => setPokedex(poke)} />
        </Col>
        <Col xs>
          <PokemonInfo pokedex={pokedex} />
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;
