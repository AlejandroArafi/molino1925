import React, { useState } from "react";
import { FiCoffee, FiFilter } from "react-icons/fi";
import OrderCart from "./OrderCart"; // Importamos OrderCart

const categories = [
  "Todos",
  "Espresso",
  "Café Filtrado",
  "Especialidades",
  "Postres",
];

const menuItems = [
  {
    id: 1,
    name: "Espresso Clásico",
    description: "Shot doble de nuestro blend signature",
    price: "3.49",
    category: "Espresso",
    image: "./assets/images/drinks/espresso.jpg",
    bestseller: true,
  },
  {
    id: 2,
    name: "Cappuccino Tradicional",
    description:
      "Espresso con leche vaporizada y espuma perfectamente texturizada",
    price: "4.99",
    category: "Espresso",
    image: "./assets/images/drinks/cappuccino.jpeg",
    bestseller: true,
  },
  {
    id: 3,
    name: "Frappuccino de Vainilla",
    description: "Café de filtro con notas florales y cítricas",
    price: "5.49",
    category: "Café Filtrado",
    image: "./assets/images/drinks/frappuccino.jpg",
  },
  {
    id: 4,
    name: "Affogato Especial",
    description: "Shot de espresso sobre helado de vainilla artesanal",
    price: "6.49",
    category: "Especialidades",
    image: "./assets/images/drinks/affogato-especial.jpeg",
  },
  {
    id: 5,
    name: "Cold Brew",
    description: "Café de filtro con notas florales y cítricas",
    price: "5.49",
    category: "Café Filtrado",
    image: "./assets/images/drinks/cold-brew.jpeg",
  },
  {
    id: 6,
    name: "Brownie de Chocolate",
    description: "Trozo de brownie de chocolate con nueces",
    price: "4.99",
    category: "Postres",
    image: "./assets/images/desserts/brownie.jpeg",
  },
  {
    id: 7,
    name: "Tiramisu",
    description: "Pastel de tiramisu con chocolate y nueces",
    price: "6.49",
    category: "Postres",
    image: "./assets/images/desserts/tiramisu.jpeg",
  },
  {
    id: 8,
    name: "Croissant de Almendra",
    description: "Croissant de almendra con chocolate y nueces",
    price: "5.49",
    category: "Postres",
    image: "./assets/images/desserts/croissant.jpeg",
  },
];

const MenuItem = ({ item, onAddToCart }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div className="relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      {item.bestseller && (
        <div className="absolute top-2 right-2 bg-coffee-600 text-white text-xs px-2 py-1 rounded-full">
          Bestseller
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-coffee-800">{item.name}</h3>
      <p className="text-gray-600 text-sm mt-1 h-12">{item.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-coffee-600 font-bold">${item.price}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition-colors flex items-center space-x-2"
        >
          <span>Agregar</span>
          <FiCoffee className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const OrderMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [cartItems, setCartItems] = useState([]); // Estado para carrito

  const filteredItems = menuItems.filter(
    (item) => selectedCategory === "Todos" || item.category === selectedCategory
  );

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-coffee-800 flex items-center gap-2">
          <FiCoffee className="text-coffee-600" />
          Nuestro Menú
        </h2>
        <div className="flex items-center space-x-2 text-sm">
          <FiFilter className="text-coffee-600" />
          <span className="text-gray-600">Filtrar por:</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedCategory === category
                ? "bg-coffee-600 text-white"
                : "bg-coffee-100 text-coffee-600 hover:bg-coffee-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>

      {/* Mostrar Carrito solo si hay items */}
      {cartItems.length > 0 && (
        <div className="mt-8 p-4 bg-coffee-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-coffee-800">Tu Carrito</h3>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderMenu;
