import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

//conponent
import Navbar from './conponent/Navbar';
import StoreItem from './conponent/StoreItem';
import NewItem from './conponent/NewItem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <div className='part'>
          <div className='titleWrap'>
            <h2 className='title'>
              <span className='important'>
                스토어.
              </span>
              좋아하는 Apple 제품을 구입하는 가장 좋은 방법.
            </h2>
          </div>
          <StoreItem  />
        </div>
        <div className='part'>
        <div className='titleWrap'>
            <h5 className='title'>
              <span className='important'>
                최신제품.
              </span>
              따끈따끈한 신제품 이야기.
            </h5>
          </div>
          <NewItem />
        </div>
      </Container>
    </div>
  );
}

export default App;
