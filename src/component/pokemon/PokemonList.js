import React from "react";
import { Row } from "react-bootstrap";
import usePokemonList from "../../hook/usePokemonList";
import LoadMoreButton from "../button/LoadMoreButton";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  const [list] = usePokemonList();

  return (
    <Row className="m-auto">
      {list.map((pokemon) => (
        <PokemonItem key={Math.random(10000)} data={pokemon} />
      ))}
      <LoadMoreButton />
    </Row>
  );
};

export default PokemonList;
