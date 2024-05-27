// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
