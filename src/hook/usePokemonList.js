import { useEffect, useState } from "react";
import { getPokemonList } from "../service/getPokemon";

export default function usePokemonList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getPokemonList()
      .then((res) => setList(res.data.results))
      .catch(() => setList([]));
  }, []);
  return [list, setList];
}
