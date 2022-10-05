import axios from "axios";
import { useEffect, useState } from "react";
import { getPokemonList } from "../service/getPokemon";

export default function usePokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemon = (res) => {
    // eslint-disable-next-line
    res.map((item) => {
      setLoading(true);
      axios.get(item.url).then((res) => {
        setPokemon((list) => {
          list = [...list, res.data];
          return [...new Set(list)];
        });
      });
      setLoading(false);
    });
  };

  useEffect(() => {
    getPokemonList().then((res) => {
      setList(res.data.results);
    });
  }, []);

  useEffect(() => {
    getPokemon(list);
  }, [list]);

  return [pokemon, loading];
}
