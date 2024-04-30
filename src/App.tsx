import "./App.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import { Route, Routes } from "react-router-dom";
import { UseMainContext } from "../context/MainContext";

function App() {
  const { isNavVisible } = UseMainContext();

  return (
    <div className="main_wrapper">
      <div className={isNavVisible ? "black_background" : "notActive"}></div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
