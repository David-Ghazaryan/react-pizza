import React from 'react'
import Header from '../header/header';
import CartItem from '../components/cart-item';
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
     <div className="container">
      <main className="w-full max-w-3/4 px-4 py-5 mx-auto  ">
          
          {/* Top */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="flex items-center gap-3 text-3xl font-bold">
               Shopping Cart
            </h2>

            <button className="flex items-center gap-2 text-gray-400 transition hover:text-gray-600 cursor-pointer">
               Clear Cart
            </button>
          </div>

          {/* Items */}
          <div className="divide-y">
          {/* Replace with <CartItem /> */}
            <CartItem imageUrl="src/assets/chicken.png" name="Margherita" type="Regular" size="Medium" count={2} price={300} />
            <CartItem imageUrl="src/assets/chicken.png" name="Pepperoni" type="Regular" size="Large" count={1} price={400} />
            <CartItem imageUrl="src/assets/chicken.png" name="Hawaiian" type="Regular" size="Small" count={1} price={200} />
          </div>

          {/* Bottom */}
          <div className="mt-5">
            <div className="mb-8 flex justify-between text-lg">
              <span>
                Total Pizzas: <b>3 pcs.</b>
              </span>
              <span>
                Total Order: <b>900 $</b>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-gray-600 transition hover:bg-gray-100"
              >
                ← Back
              </Link>

              <button className="rounded-full bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600">
                Pay Now
              </button>
            </div>
          </div>
      </main>
    </div>
  );
};
export default Cart