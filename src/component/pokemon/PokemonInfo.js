import React from "react";
import { Card, Col, Table } from "react-bootstrap";
import pokeball from "../../assets/pokeball.png";

const PokemonInfo = () => {
  return (
    <Col style={{ width: "35%" }} className="m-auto">
      <Card className="p-3 border-dark rounded-0">
        <Card.Img variant="top" src={pokeball} />
        <Card.Body className="p-0 text-center text-capitalize">
          <Card.Title className="mt-2 fw-bold">name</Card.Title>
          <Table bordered className="m-auto border-dark">
            <tbody>
              <tr>
                <td>Type</td>
                <td>fire</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>546</td>
              </tr>
              <tr>
                <td>Hp</td>
                <td>546</td>
              </tr>
              <tr>
                <td>SP Attack</td>
                <td>546</td>
              </tr>
              <tr>
                <td>SP Defence</td>
                <td>546</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>546</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>546</td>
              </tr>
              <tr>
                <td>Total moves</td>
                <td>546</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonInfo;
