import React from "react";
import "./App.css";
import Animated from "./components/animated";
import Infocard from "./components/infocard";

function App() {
  return (
    <div className="App">
      <div style={{ height: 60 }} />
      <Infocard />
      <Animated />
    </div>
  );
}

export default App;
