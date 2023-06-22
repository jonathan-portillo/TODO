import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
