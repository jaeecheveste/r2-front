import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

import "./App.css";
import HomePage from "./pages/HomePage";
import NavBarUI from "./components/layout/navigation/navbar/NavBarUI";

const App: React.FC = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          R2
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Fibonacci
            </Link>
          </li>
        </div>
      </nav> */}
      <NavBarUI/>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;