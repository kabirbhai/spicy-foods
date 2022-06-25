import Header from "./pages/shared/header/Header";
import Footer from "./pages/shared/footer/Footer";
import Login from "./pages/login/login/Login";
import Signup from "./pages/login/signup/Signup";
import Home from "./pages/home/home/Home";
import Lunches from "./pages/home/sections/lunch/Lunches";
import Dinners from "./pages/home/sections/dinner/Dinners";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/shared/notFound/NotFound";
import Breakfasts from "./pages/home/sections/breakfast/Breakfasts";
import Foods from "./pages/home/sections/foods/Foods";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/foods" element={<Home />}>
          <Route index element={<Foods />}></Route>
          <Route path="breakfast" element={<Breakfasts />}></Route>
          <Route path="lunch" element={<Lunches />}></Route>
          <Route path="dinner" element={<Dinners />}></Route>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
