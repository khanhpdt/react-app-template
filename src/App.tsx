import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/HomeContainer";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
