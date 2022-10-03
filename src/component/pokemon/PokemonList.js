import React, { useState } from "react";
import { Row } from "react-bootstrap";
import usePokemonList from "../../hook/usePokemonList";
import LoadMoreButton from "../button/LoadMoreButton";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  const [list] = usePokemonList();
  const [loadMore, setLoadMore] = useState(8);

  return (
    <Row className="m-auto">
      {list.slice(0, loadMore).map((pokemon) => (
        <PokemonItem key={pokemon.name} data={pokemon} />
      ))}
      <LoadMoreButton setLoadMore={setLoadMore} />
    </Row>
  );
};

export default PokemonList;
