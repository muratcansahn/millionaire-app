import { useState } from "react";
import "./App.css";
import { Pyramid, Trivia } from "./components";
function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia />
        </div>
      </div>
      <Pyramid />
    </div>
  );
}

export default App;
