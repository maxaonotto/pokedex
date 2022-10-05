import React from "react";
import { Container } from "react-bootstrap";
import Header from "../component/Header";
import Wrapper from "../component/Wrapper";

const HomePage = () => {
  return (
    <Container fluid className="p-0">
      <Header />
      <Wrapper />
    </Container>
  );
};

export default HomePage;
