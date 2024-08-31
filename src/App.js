import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import { Form } from 'react-router-dom';
import { Router, Routes, Route, Link } from 'react-router-dom';

//component
import Navbar from './component/Navbar/Navbar';
import StoreItem from './component/StoreItem/StoreItem';
import NewItem from './component/NewItem/NewItem';
import HelfSelf from './component/HelfSelf/HelfSelf';
import MoreReasons from './component/MoreReasons/MoreReasons';
import Sale from './component/Sale/Sale';
import FastLink from './component/FastLink/FastLink';
import Footer from './component/Footer/Footer';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ForgotPw from './pages/ForgotPw/ForgotPw';
import Basket from './pages/Basket/Basket';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <StoreItem />
              <NewItem />
              <HelfSelf />
              <MoreReasons />
              <Sale />
              <FastLink />
            </Container>
          }
        ></Route>
        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/forgotpw" element={<ForgotPw />}></Route>
        <Route path="/login/signUp" element={<SignUp />}></Route>

        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/newItem" element={<NewItem />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
