import "./App.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
