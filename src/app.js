import React from "react";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";

import Nav from './front-end/components/Navbar';
// import getSongsTable from './front-end/components/getSongsTable'
import home from './front-end/components/home'
import about from './front-end/components/about'
import browse from './front-end/components/Browse'


function App() {
  return (
    <Router>
      <Route path='/' component={Nav}></Route>
      <Route path='/home' component={home}></Route>
      <Route path='/about' component={about}></Route>
      <Route path='/browseSongs' component={browse}></Route>
    </Router>
  );
}

export default App;
