import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing';


function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname !== "/" && <NavBar />}
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    {/*
    <Route path="/empanadas" element={<Empanadas />}  />
    <Route path="/bebidas" element={<Bebidas />} />
    <Route path="/postres" element={<Postres />} />
    <Route path="/carrito" element={<Carrito />} />
    <Route path="/checkout" element={<Checkout />} />
  <Route path="/view/:id" element={<View />} /> */}
  </Routes>
  </>
  );
}

export default App;
