import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/login";
import SignUp from "./components/signup";
import About from "./components/about";
import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
