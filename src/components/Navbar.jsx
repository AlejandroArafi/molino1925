import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-coffee-600">Molino 1925</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#menu" className="text-coffee-600 hover:text-coffee-800">
                Menu
              </a>
              <a
                href="#about"
                className="text-coffee-600 hover:text-coffee-800"
              >
                Acerca
              </a>
              <a
                href="#contact"
                className="text-coffee-600 hover:text-coffee-800"
              >
                Contacto
              </a>
              <Link
                to="/order"
                className="bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700"
              >
                Ordena Ahora
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#menu"
                className="block text-coffee-600 hover:text-coffee-800 py-2"
              >
                Menu
              </a>
              <a
                href="#about"
                className="block text-coffee-600 hover:text-coffee-800 py-2"
              >
                Acerca
              </a>
              <a
                href="#contact"
                className="block text-coffee-600 hover:text-coffee-800 py-2"
              >
                Contacto
              </a>
              <Link
                to="/order"
                className="w-full bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 mt-4 block text-center"
              >
                Ordenar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
