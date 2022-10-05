import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getPokemonList } from "../service/getPokemon";
import PokemonInfo from "./pokemon/PokemonInfo";
import PokemonList from "./pokemon/PokemonList";

const Wrapper = () => {
  const [pokemon, setPokemon] = useState([]);
  const [state, setState] = useState([]);
  const [pokedex, setPokedex] = useState();
  // const [loading, setLoading] = useState(true);

  const getPokemon = (res) => {
    // eslint-disable-next-line
    res.map((item) => {
      axios.get(item.url).then((res) => {
        setPokemon((list) => {
          list = [...list, res.data];
          list.sort((a, b) => (a.id > b.id ? 1 : -1));
          return list;
        });
      });
    });
  };

  useEffect(() => {
    getPokemonList().then((res) => {
      setState(res.data.results);
    });
  }, []);

  useEffect(() => {
    getPokemon(state);
  }, [state]);

  // if (loading) return "Loading.....";
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
