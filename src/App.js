import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./components/Home";
import Category from "./components/Category";
import Products from "./components/Products";

import "./App.css";

const fakeAuth = {
  isAuthenticated: true,
};

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <PrivateRoute
          authed={fakeAuth.isAuthenticated}
          path="/products"
          component={Products}
        />
      </Switch>
    </div>
  );
};

export default App;
