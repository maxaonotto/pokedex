import React from "react";
import { Form, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row className="w-25 py-3 m-auto fw-bold fs-4">
      <Form className="p-2 border border-dark text-center">Pokedex</Form>
    </Row>
  );
};

export default Header;
