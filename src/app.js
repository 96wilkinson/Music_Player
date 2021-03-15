import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import home from './front-end/components/home';
import about from './front-end/components/about';

function App() {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={about}>
          </Route>
          <Route path="/" component={home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
