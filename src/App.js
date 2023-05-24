import React from 'react';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
function App() {
  return (
    <Router>

      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/checkout" element={
            <>
             
              <Checkout/>
            </>
          }/>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/" element={
            <>
             <Home />
            </>
          } />
          <Route path="/Returns" element={<h1>Returns</h1>} />
          <Route path="/Prime" element={<h1>Prime</h1>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
