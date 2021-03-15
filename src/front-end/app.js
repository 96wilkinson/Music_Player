import React from 'react';
import Router from './components/router';
import './App.css';

function App() {
    return (
      <>
        <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Home />
            <About />
        </div>
      </>
    );
  }

export default App;