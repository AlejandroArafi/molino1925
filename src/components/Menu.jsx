const MenuItem = ({ name, description, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-coffee-600">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-coffee-500 font-semibold mt-4">${price}</p>
    </div>
  </div>
);

const Menu = () => {
  const menuItems = [
    {
      name: "Signature Latte",
      description:
        "Rich espresso with velvety steamed milk and our secret blend",
      price: "4.99",
      image: "/assets/images/menu/signature-latte.png",
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso with vanilla-flavored drink marked with caramel",
      price: "5.49",
      image: "assets/images/menu/macchiato.jpg",
    },
    {
      name: "Cold Brew",
      description: "Smooth, cold-steeped coffee with subtle sweetness",
      price: "4.49",
      image: "/assets/images/menu/Cold-Brew.jpg",
    },
    {
      name: "Mocha Supreme",
      description: "Perfect blend of espresso, chocolate, and steamed milk",
      price: "5.99",
      image: "assets/images/menu/Mocha.jpg",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-coffee-600">Nuestro Menu</h2>
          <p className="mt-4 text-gray-600">
            Descubre nuestras bebidas artesanales.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
