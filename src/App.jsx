import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OrderPage from "./components/pages/OrderPage"; // Cambiado a OrderPage

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          {/* Ruta principal (Home) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Menu />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Ruta para la página de pedidos */}
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
