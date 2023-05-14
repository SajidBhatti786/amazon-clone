import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={
            <>
             <Header /> 
              <h1>CheckOut</h1>  
            </>
          }/>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/" element={
            <>
              <Header /> 
              <h1>Home Page</h1>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
