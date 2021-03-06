import {Routes, Route } from "react-router-dom";
import React from 'react'
import '../scss/App.scss'
//components
import Home from '../pages/Home'
import Header from "./Header";
import Footer from "./Footer";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import NotFound from "../components/NotFound"
import NoCodeAbout from "../pages/NoCodeAbout";
import CodeAbout from "../pages/CodeAbout";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/no-code-about" element={<NoCodeAbout />} />
          <Route path="/code-about" element={<CodeAbout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App

