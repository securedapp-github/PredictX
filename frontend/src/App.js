import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from './Components/Footer';
import Map from './Pages/Map';
import Profile from './Pages/Profile';
import Crime from './Pages/Crime';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
