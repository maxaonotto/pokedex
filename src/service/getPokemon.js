import axios from "axios";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonList = () => {
  return axios.get(`${pokemonUrl}/?limit=12`);
};

export const getSinglePokemon = () => {
  return axios.get(`${pokemonUrl}/${1}`);
};
