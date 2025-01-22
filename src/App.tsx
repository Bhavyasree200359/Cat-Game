import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import explodingCat from "../src/images/exploding-cat.jpg";
import Home from "../src/components/home";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Main() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  return (
    <div className="start-page-div">
      <h1>EXPLODING KITTEN</h1>
      <img src={explodingCat} alt="Exploding cat" />
      <button onClick={handleStart} className="get-started-button">
        Get Started
      </button>
    </div>
  );
}

export default App;
