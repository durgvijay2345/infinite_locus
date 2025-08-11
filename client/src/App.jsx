import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Testinomials from "./pages/Testinomials";
import UniEventsPage from "./pages/Event";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/testimonials" element={<Testinomials/>} />
          <Route path ="/event" element={<UniEventsPage/>} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
