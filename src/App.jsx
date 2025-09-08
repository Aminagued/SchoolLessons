// src/App.jsx
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Grade1 from "./pages/Grade1";
import Grade2 from "./pages/Grade2";
import Grade3 from "./pages/Grade3";
import Grade4 from "./pages/Grade4";
import Grade5 from "./pages/Grade5";
import Grade6 from "./pages/Grade6";
import Home from "./pages/Home";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Router>
      <div className="App">
        <Header activeLink={activeLink} setActiveLink={setActiveLink} />
        <Routes>
          <Route path="/" element={<Home setActiveLink={setActiveLink} />} />
          <Route
            path="/grade1"
            element={<Grade1 setActiveLink={setActiveLink} />}
          />
          <Route
            path="/grade2"
            element={<Grade2 setActiveLink={setActiveLink} />}
          />
          <Route
            path="/grade3"
            element={<Grade3 setActiveLink={setActiveLink} />}
          />
          <Route
            path="/grade4"
            element={<Grade4 setActiveLink={setActiveLink} />}
          />
          <Route
            path="/grade5"
            element={<Grade5 setActiveLink={setActiveLink} />}
          />
          <Route
            path="/grade6"
            element={<Grade6 setActiveLink={setActiveLink} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
