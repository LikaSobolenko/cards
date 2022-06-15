import React from "react";
import "./App.css";
import Tarif from "./components/tarif";
import themeA from "./components/theme300.css";
import themeB from "./components/theme450.css";

function App() {
  return (
    <div className="App">
      <Tarif theme={themeA} name="300" price="300" speed="10" />
      <Tarif theme={themeB} name="450" price="450" speed="50" />
    </div>
  );
}

export default App;
