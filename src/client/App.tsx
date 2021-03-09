import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";

const App: React.FC = () => {
    return (
        <Router>
            <h1>App</h1>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;