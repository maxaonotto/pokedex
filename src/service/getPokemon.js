import axios from "axios";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonList = () => {
  return axios.get(pokemonUrl);
};

export const getPokemonId = (id) => {
  return axios.get(`${pokemonUrl}/${id}`);
};

export const getPokemonType = (id) => {
  return axios.get(`${pokemonUrl}/${id}/types`);
};
