import { FiCoffee, FiHeart, FiUsers } from "react-icons/fi";

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-coffee-600" />
    </div>
    <h4 className="text-lg font-semibold text-coffee-600 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const values = [
    {
      icon: FiCoffee,
      title: "Calidad Superior",
      description: "Cada taza es una obra maestra de sabor y aroma.",
    },
    {
      icon: FiHeart,
      title: "Origen Sostenible",
      description: "Colaboramos directamente con agricultores responsables.",
    },
    {
      icon: FiUsers,
      title: "Comunidad Primero",
      description: "Creamos espacios donde florecen las conexiones.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-coffee-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="h-1 w-12 bg-coffee-400"></span>
                <span className="text-coffee-600 uppercase tracking-wider text-sm font-medium">
                  Nuestra Historia
                </span>
              </div>
              <h2 className="text-4xl font-bold text-coffee-800 leading-tight">
                Tradición desde
                <span className="text-coffee-600 block">1925</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fundado en 1925, Molino 1925 nació de una pasión por el café
              excepcional y el deseo de crear un espacio acogedor y cálido para
              nuestra comunidad. Seleccionamos nuestros granos directamente de
              fincas sostenibles y los tostamos con dedicación para garantizar
              una experiencia perfecta en cada taza.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <img
                src="/assets/images/coffee-shop.png"
                alt="Our Coffee Shop"
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-coffee-600 font-bold text-4xl">
                  98<span className="text-2xl">%</span>
                </div>
                <div className="text-gray-600">Clientes Satisfechos</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-coffee-600 p-6 rounded-xl shadow-xl text-white">
                <div className="font-bold text-3xl">1925</div>
                <div className="text-coffee-100">Año Fundación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
