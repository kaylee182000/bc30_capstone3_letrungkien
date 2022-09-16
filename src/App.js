import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      {Outlet}
      <Footer />
    </div>
  );
}

export default App;
