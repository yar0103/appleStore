import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

//conponent
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./conponent/Navbar/Navbar";
import StoreItem from "./conponent/StoreItem/StoreItem";
import NewItem from "./conponent/NewItem/NewItem";
import HelfSelf from "./conponent/HelfSelf/HelfSelf";
import MoreReasons from "./conponent/MoreReasons/MoreReasons";
import Sale from "./conponent/Sale/Sale";
import FastLink from "./conponent/FastLink/FastLink";
import Footer from "./conponent/Footer/Footer";
import { Form } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      {/* <Navbar />
      <Container>
        <StoreItem />
        <NewItem />
        <HelfSelf />
        <MoreReasons />
        <Sale />
        <FastLink />
      </Container>
      <Footer /> */}
    </div>
  );
}

export default App;
