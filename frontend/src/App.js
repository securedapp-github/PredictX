import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from './Components/Footer';

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
