'use client';
import React, { useState } from 'react';

export default function CartPage() {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1, img: '/p1.png' },
    { id: 2, name: 'Product 2', price: 30, quantity: 1, img: '/p2.png' },
    { id: 3, name: 'Product 3', price: 40, quantity: 1, img: '/p3.png' }
  ]);

  // Handle delete product from cart
  const handleDelete = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="pt-8">
      <div className="flex flex-col md:flex-row gap-8"> {/* Stack items vertically on mobile, side by side on desktop */}

        {/* Left Box Section (Cart Items) */}
        <div className="w-full md:w-[60%] p-4 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

          {/* Cart Item List */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 mb-4 bg-white shadow-lg rounded-lg">
                <div className="flex items-center">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <div className="flex items-center">
                      <label className="mr-2">Quantity:</label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-16 text-center border p-1 rounded"
                        min="1"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-800 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Order Summary Section */}
        <div
          className="w-full md:w-[35%] p-4 bg-white shadow-lg rounded-lg mt-6 md:mt-0"
          style={{
            padding: '20px 24px',
            gap: '24px',
            borderRadius: '20px',
            border: '1px solid transparent',
            opacity: 1,
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">${calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-medium">Shipping</span>
            <span className="font-medium">$10</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="font-medium">Total</span>
            <span className="font-medium">${calculateTotal() + 10}</span>
          </div>
          <button className="bg-black text-white py-2 px-4 w-full rounded-lg hover:bg-gray-800 transition-all">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
