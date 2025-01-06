import { FiCoffee, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Fondo con efecto parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-fixed"
        style={{ backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-beige-200/90 to-beige-100/70"></div>
      </div>

      {/* Contenido principal */}
      <div className="container relative mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="text-brown-800 space-y-8">
            <div className="flex items-center space-x-2">
              <span className="h-1 w-12 bg-coffee-200"></span>
              <span className="text-coffee-600 uppercase tracking-wider text-sm font-medium">
                Bienvenido a Molino 1925
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              El Arte de la Infusión Perfecta
            </h1>

            <p className="text-xl text-brown-600 max-w-lg">
              Café artesanal elaborado con pasión, donde cada taza cuenta una
              historia de calidad y dedicación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu">
                <button className="bg-coffee-200 text-brown-800 px-8 py-4 rounded-lg hover:bg-coffee-300 transition-all duration-300 flex items-center justify-center group">
                  Ver nuestro menú
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <button className="border-2 border-coffee-300 text-brown-800 px-8 py-4 rounded-lg hover:bg-coffee-100/50 transition-all duration-300">
                Reservar mesa
              </button>
            </div>
          </div>

          {/* Contenido derecho: Producto destacado */}
          <div className="hidden md:block">
            <div className="bg-coffee-100/50 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src="/assets/images/coffee.jpg"
                  alt="Café destacado"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="mt-6 text-brown-800">
                <h3 className="text-xl font-semibold">Signature Latte</h3>
                <p className="text-brown-600 mt-2">
                  Nuestra mezcla galardonada con toques de caramelo.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-coffee-600 text-lg font-semibold">
                    $4.99
                  </span>
                  <button className="flex items-center text-sm hover:text-coffee-300 transition-colors">
                    Ordenar ahora <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige-300/50 to-transparent"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="w-2 h-2 rounded-full bg-coffee-300"></div>
        <div className="w-2 h-2 rounded-full bg-brown-400"></div>
        <div className="w-2 h-2 rounded-full bg-brown-300"></div>
      </div>
    </div>
  );
};

export default Hero;
