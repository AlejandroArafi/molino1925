import React from "react";
import { FiCoffee } from "react-icons/fi";

const OrderHero = () => {
  return (
    <div className="relative bg-coffee-900 text-white py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/95 to-coffee-800/95" />
        <img
          src="./assets/images/coffee-shop.png"
          alt="Coffee shop background"
          className="w-full h-full object-cover filter brightness-50"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
          Ordena tu café favorito
        </h1>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <FiCoffee className="w-12 h-12 mb-4 text-coffee-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ordena tu café favorito
          </h1>
          <p className="text-xl text-coffee-100 max-w-2xl">
            Disfruta de nuestros deliciosos cafés preparados con los mejores
            granos seleccionados y tostados artesanalmente
          </p>
          <div className="mt-8 flex items-center space-x-4 text-coffee-200">
            <div className="flex items-center">
              <FiCoffee className="w-5 h-5 mr-2" />
              <span>Granos Premium</span>
            </div>
            <span>•</span>
            <div>Tostado Diario</div>
            <span>•</span>
            <div>Entrega Rápida</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHero;
