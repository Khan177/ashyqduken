import React from "react";

import Header from "./pages/Header/Header";
import { Switch, Route } from "react-router-dom";
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
