import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import ProfilePhoto from './component/ProfilePhoto'
import FullName from './component/FullName';
import Address from './component/Address';
function App() {
  return (
    <div className="App">
      <div className="card-container">
        <div className="card-title">
            <h1> My Profil Card</h1>
          </div>
          <div>
            <ProfilePhoto/>
          </div>
          
          <div className="about">
            <FullName/>
            <Address/>
          </div>  
          <div className='btn d-grid gap-2'>
          <Button variant="success" size="lg" >
          <a>
                view more
              </a>
          
          </Button>{' '}

            
          </div>
      </div>
    </div>
  );
}

export default App;
