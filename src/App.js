import React from "react";
import Home from "./pages";
// import Single from "./pages";
import { Routes, Route } from "react-router-dom";
import Single from "./pages/single";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
