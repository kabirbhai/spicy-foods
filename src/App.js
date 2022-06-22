import "./App.css";
import Header from "./pages/shared/header/Header";
import Footer from "./pages/shared/footer/Footer";
import Login from "./pages/login/login/Login";
import Signup from "./pages/login/signup/Signup";
import Home from "./pages/home/home/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
