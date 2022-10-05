export const setPokemonTypeBg = (type) => {
  if (type === "grass") {
    return "success";
  }
  if (type === "poison") {
    return "info";
  }
  if (type === "water") {
    return "primary";
  }
  if (type === "bug") {
    return "secondary";
  }
  if (type === "flying") {
    return "light";
  }
  if (type === "fire") {
    return "danger";
  }
};
