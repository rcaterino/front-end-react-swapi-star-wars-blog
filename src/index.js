import React from "react";
import ReactDOM from "react-dom/client";

import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

import Layout from "./layout";

const darkTheme = createTheme({
  type: 'dark',
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <Layout />
    </NextUIProvider>
  </React.StrictMode>
);
