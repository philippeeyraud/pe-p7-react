import React from "react";
import reactDom from "react-dom/client";
import Routes from "./routes";
import {createGlobalStyle }from 'styled-components'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`
const reactRoot = reactDom.createRoot(document.getElementById("root"));
reactRoot.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <GlobalStyle/>
      <Header />
      <Routes />
      <Footer />
    
     

     </BrowserRouter>
 
  </React.StrictMode>
);
