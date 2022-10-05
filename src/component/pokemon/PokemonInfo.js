import React from "react";
import { Card, Col, Table } from "react-bootstrap";

const PokemonInfo = ({ pokedex }) => {
  return (
    <>
      {!pokedex ? (
        ""
      ) : (
        <Col>
          <Card key={pokedex.id} className="p-3 border-dark rounded-0">
            <Card.Img
              variant="top"
              src={pokedex.sprites.front_default}
              style={{ width: "200px" }}
              height="200px"
              className="m-auto"
            />
            <Card.Body className="p-0 text-center text-capitalize">
              <Card.Title className="mt-2 fw-bold">
                {pokedex.name} #0{pokedex.id}
              </Card.Title>
              <Table bordered className="w-100 m-auto border-dark">
                <tbody>
                  <tr className="h-100">
                    <td className="w-75">Type</td>
                    <td className="p-2 h-100">
                      {pokedex.types.map((poke) => {
                        return (
                          <div
                            className="w-25 d-inline text-nowrap "
                            key={poke.slot}
                          >
                            {" "}
                            {poke.type.name}
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                  {pokedex.stats.map((poke) => {
                    return (
                      <tr key={poke.stat.url}>
                        <td>{poke.stat.name}</td>
                        <td>{poke.base_stat}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Weight</td>
                    <td>{pokedex.weight}</td>
                  </tr>
                  <tr>
                    <td>Total moves</td>
                    <td>{pokedex.moves.length}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default PokemonInfo;
