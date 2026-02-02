import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      <main className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          The cart is empty<span>😕</span>
        </h2>

        <p className="mb-8 text-gray-500">
          Chances are, you haven't ordered pizza yet.
          <br />
          To order pizza, go to the main page.
        </p>

        <img
          src="src/assets/empty-cart.png"
          alt="Empty cart"
          className="mb-10 w-72"
        />

        <Link
          to="/"
          className="rounded-full bg-black px-8 py-3 font-bold text-white hover:bg-gray-800 transition"
        >
          Go Back
        </Link>
      </main>
    </div>
  );
};

export default EmptyCart;
