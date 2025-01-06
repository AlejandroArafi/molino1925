import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-coffee-600  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Molino 1925</h3>
            <p className="mt-4 text-coffee-100">
              Creando momentos perfectos, una taza a la vez.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Horario de atencion</h4>
            <ul className="mt-4 space-y-2">
              <li>Lun-Vie: 7am - 8pm</li>
              <li>Sabado: 8am - 8pm</li>
              <li>Domingo: 8am - 6pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Siguenos</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-coffee-200">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="hover:text-coffee-200">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="hover:text-coffee-200">
                <FiTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-coffee-500">
          <p className="text-center text-coffee-200">
            © {new Date().getFullYear()} Molino 1925. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
