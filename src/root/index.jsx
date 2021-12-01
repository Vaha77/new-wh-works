import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./style";
import { Navbar } from "../components/navbar";
import Body from "../components/body";
import { About } from "../components/abaut";
export const Root = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Body />
        <About/>
      </Container>
    </Router>
  );
};
export default Root;
