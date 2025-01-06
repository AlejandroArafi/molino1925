import React from "react";
import OrderHero from "./OrderHero";
import OrderMenu from "./OrderMenu";
import OrderCart from "./OrderCart";

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección Hero */}
      <OrderHero />

      <div className="container mx-auto px-4 lg:px-8 mt-10">
        <div className="lg:flex lg:gap-8">
          {/* Carrito (Sticky en pantallas grandes) */}
          <div className="lg:w-1/3 lg:sticky lg:top-20 mb-8 lg:mb-0">
            <OrderCart />
          </div>

          {/* Menú Principal */}
          <div className="lg:w-2/3">
            <OrderMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
