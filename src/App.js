import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="flex">
        <NavigationBar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
