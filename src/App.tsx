import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import Timer from "./components/Timer";

const App: React.FC = () => {
  const [startTime, setStartTime] = useState(0);
  const startCount = useRef(() => {});
  return (
    <div className="App">
      <header className="App-header">
        <Timer startTime={startTime} startCount={startCount} />

        <button
          onClick={() => {
            console.log("누름");
            setStartTime(startTime + 100);
            startCount.current();
          }}
        >
          button
        </button>
      </header>
    </div>
  );
};

export default App;
