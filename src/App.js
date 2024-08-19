import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//conponent
import Navbar from "./conponent/Navbar/Navbar";
import StoreItem from "./conponent/StoreItem/StoreItem";
import NewItem from "./conponent/NewItem/NewItem";
import HelfSelf from "./conponent/HelfSelf/HelfSelf";
import MoreReasons from "./conponent/MoreReasons/MoreReasons";
import Sale from "./conponent/Sale/Sale";
import FastLink from "./conponent/FastLink/FastLink";
import Footer from "./conponent/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <StoreItem />
        <NewItem />
        <HelfSelf />
        <MoreReasons />
        <Sale />
        <FastLink />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
