import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Container, Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    
    <div className="App">
      <Button > btn</Button>
      <Navbar className='navbar' bg='primary' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='#home'>Dessert Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Dessert</Nav.Link>
            <Nav.Link href='#pricing'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
