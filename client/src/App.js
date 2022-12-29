import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import About from "./views/About/About";
import CreateBreed from "./views/CreateBreed/CreateBreed";
import Details from "./views/details/details";
import Home from "./views/Home/Home.jsx";
import Landing from "./views/Landing/Landing";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createBreed" element={<CreateBreed />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
