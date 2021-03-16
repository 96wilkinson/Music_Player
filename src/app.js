import React from "react";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Nav from './front-end/components/Navbar';
import songCard from './front-end/components/getSongsCard'


function App() {
  return (
    <Router>
      <Route path='/' component={Nav}></Route>
      <Route path='/' component={songCard}></Route>
    </Router>
  );
}

export default App;
