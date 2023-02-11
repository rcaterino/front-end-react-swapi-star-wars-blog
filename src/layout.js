import { Container } from "@nextui-org/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import injectContext from "./store/appContext";

import Detail from "./views/Detail";
import Home from "./views/Home";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <Container
        fluid
        css={{
          maxW: "100%",
        }}
      >
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/:clase/:theid" element={<Detail />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
