import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import CreateBreed from './views/CreateBreed/CreateBreed';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing';


function App() {
  const { pathname } = useLocation();
  return (
    <>
    {pathname !== "/" && <NavBar />}
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/createBreed" element={<CreateBreed />} />

  </Routes>
  <Footer />
  </>
  );
}

export default App;
