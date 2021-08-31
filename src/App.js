import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Landing from "./components/Landing";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
            <Route path="/products" component={Products} />
          <Route path="/" component={Landing} />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
