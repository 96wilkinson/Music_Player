import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import home from './home';
import about from './about';

export default class Nav extends React.Component {
    render() {
        return (
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
                <Switch>
                    <Route path="/about" component={about}>
                    </Route>
                    <Route path="/" component={home}>
                    </Route>
                </Switch>
            </div>
        );
    }
}