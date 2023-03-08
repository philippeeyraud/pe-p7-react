import React from "react";
import reactDom from "react-dom/client";
import Routes from "./routes";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";




const reactRoot = reactDom.createRoot(document.getElementById("root"));
reactRoot.render(
  <React.StrictMode>
    
    <BrowserRouter>
   
  
   
      <Header />
      <Routes />
      <Footer />
    
     

     </BrowserRouter>
 
  </React.StrictMode>
);
