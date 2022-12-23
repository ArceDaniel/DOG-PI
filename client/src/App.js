import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { apiAlldogs, apiAllTemperaments } from './features/apiPetitions';
import CreateBreed from './views/CreateBreed/CreateBreed';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing';


function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(()=>{
      apiAlldogs(dispatch);
      apiAllTemperaments(dispatch);
  },[])
  
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
