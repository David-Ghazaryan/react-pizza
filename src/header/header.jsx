import { Link } from 'react-router-dom';
import Search from '../components/search';
const Header = () => {
  return (
    <div className="py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center"> 
          <img
            width={50}
            src="src/assets/pizza-logo.png"
            alt="Pizza logo"
            className="mr-4"
          />
          </Link>
          <div>
            <h1 className="text-[24px] font-extrabold uppercase tracking-wide text-[#181818]">
              React Pizza
            </h1>
            <p className="text-gray-500">
              The best pizza in the universe
            </p>
          </div>
        </div>
        <Search />
        {/* Cart */}
        <div>
          <a
            href="/cart.html"
            className="flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-white font-bold hover:bg-orange-600 transition"
          >
            <span>520 ₽</span>

            <div className="h-6 w-px bg-white/40"></div>

            <img src="src/assets/busket.svg" alt="" />

            <span>3</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Header;
