import React from "react";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Nav from './front-end/components/Navbar';
import songPrompt from './front-end/components/getSongsPrompt'


function App() {
  return (
    <Router>
      <Route path='/' component={Nav}></Route>
      <Route path='/' component={songPrompt}></Route>
    </Router>
  );
}

export default App;
