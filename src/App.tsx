import "./App.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite/Favorite";
import { Route, Routes } from "react-router-dom";
import { UseMainContext } from "../context/MainContext";
import Profile from "./pages/Profile/Profile";

function App() {
  const { navVisible } = UseMainContext();

  return (
    <div className="main_wrapper">
      <div className={navVisible ? "black_background" : "notActive"}></div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
