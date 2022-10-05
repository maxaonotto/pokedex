export const setPokemonTypeBg = (type) => {
  switch (type) {
    case "grass":
      backgroundColor = "green";
      break;
    case "poison":
      backgroundColor = "violet";
      break;
    case "water":
      backgroundColor = "blue";
      break;
    case "bug":
      backgroundColor = "yellow";
      break;
    case "fire":
      backgroundColor = "red";
      break;
    case "flying":
      backgroundColor = "yellow";
      break;
  }
};
