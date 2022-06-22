import "./App.css";
import Header from "./pages/shared/header/Header";
import Footer from "./pages/shared/footer/Footer";
import Login from "./pages/login/login/Login";
import Signup from "./pages/login/signup/Signup";

function App() {
  return (
    <div>
      <Header />

      <Login />
      <Signup />

      <Footer />
    </div>
  );
}

export default App;
