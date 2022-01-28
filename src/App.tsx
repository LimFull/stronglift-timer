import "./App.css";
import React from "react";

import TimerContainer from "./components/TimerContainer";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TimerContainer
            times={[90000, 180000, 300000]}
            buttonColor={"bg-orange-500"}
          />
        }
      />
      <Route
        path="/second"
        element={
          <TimerContainer
            times={[40000, 60000, 180000]}
            buttonColor={"bg-[#F5C3C2]"}
          />
        }
      />
    </Routes>
  );
};

export default App;
