import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Hello from "./components/hello/HelloContainer";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Hello} />
      </div>
    </Router>
  );
}

export default App;
