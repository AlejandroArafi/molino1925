import React, { useState } from "react";
import { FiShoppingBag, FiTrash2, FiCreditCard } from "react-icons/fi";

const CartItem = ({ name, price, quantity, onUpdateQuantity, onRemove }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100">
    <div className="flex-1">
      <h4 className="text-sm font-medium text-coffee-800">{name}</h4>
      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={() => onUpdateQuantity(quantity - 1)}
          className="text-xs bg-coffee-50 text-coffee-600 px-2 py-1 rounded hover:bg-coffee-100 transition-colors"
        >
          -
        </button>
        <span className="text-sm font-medium w-8 text-center">{quantity}</span>
        <button
          onClick={() => onUpdateQuantity(quantity + 1)}
          className="text-xs bg-coffee-50 text-coffee-600 px-2 py-1 rounded hover:bg-coffee-100 transition-colors"
        >
          +
        </button>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-coffee-600 font-medium">
        ${(price * quantity).toFixed(2)}
      </span>
      <button
        onClick={onRemove}
        className="text-red-500 hover:text-red-600 transition-colors"
      >
        <FiTrash2 />
      </button>
    </div>
  </div>
);

const OrderCart = () => {
    
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <FiShoppingBag className="text-coffee-600 w-5 h-5" />
        <h2 className="text-xl font-bold text-coffee-800">Tu Orden</h2>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        <CartItem
          name="Café Americano"
          price={3.99}
          quantity={2}
          onUpdateQuantity={(q) => console.log("Update quantity:", q)}
          onRemove={() => console.log("Remove item")}
        />
        <CartItem
          name="Cappuccino"
          price={4.99}
          quantity={1}
          onUpdateQuantity={(q) => console.log("Update quantity:", q)}
          onRemove={() => console.log("Remove item")}
        />
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>$12.97</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>IVA (21%)</span>
            <span>$2.72</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Envío</span>
            <span>Gratis</span>
          </div>
        </div>

        <div className="flex justify-between text-lg font-bold text-coffee-800 mt-4">
          <span>Total</span>
          <span>$15.69</span>
        </div>

        <button className="w-full bg-coffee-600 text-white py-3 rounded-lg mt-6 hover:bg-coffee-700 transition-colors flex items-center justify-center gap-2">
          <FiCreditCard className="w-5 h-5" />
          <span>Proceder al Pago</span>
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Pago seguro con encriptación SSL
        </p>
      </div>
    </div>
  );
};

export default OrderCart;
