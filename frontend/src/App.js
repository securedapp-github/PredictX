import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from './Components/Footer';
import Map from './Pages/Map';
import State from './Pages/State';
import District from './Pages/District';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Fir from './Pages/Fir';

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/state" element={<State />} />
        <Route path="/district" element={<District />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fir" element={<Fir />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
