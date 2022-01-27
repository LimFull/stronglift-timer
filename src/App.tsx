import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Timer from "./components/Timer";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
    </div>
  );
};

export default App;
