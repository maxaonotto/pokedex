import React, { useState } from "react";
import { Row } from "react-bootstrap";
import LoadMoreButton from "../button/LoadMoreButton";
import PokemonItem from "./PokemonItem";

const PokemonList = ({ data, pokeInfo }) => {
  const [loadMore, setLoadMore] = useState(6);

  return (
    <Row className="m-auto">
      {data.slice(0, loadMore).map((pokemon) => (
        <PokemonItem key={pokemon.name} data={pokemon} pokeInfo={pokeInfo} />
      ))}
      <LoadMoreButton setLoadMore={setLoadMore} />
    </Row>
  );
};

export default PokemonList;
