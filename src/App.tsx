import React from "react";
import "./App.scss";
import Hello from "./components/hello/HelloContainer";

function App(): JSX.Element {
  return (
    <div className="App">
      <button className="button">A button for testing styles</button>
      <Hello />
    </div>
  );
}

export default App;
