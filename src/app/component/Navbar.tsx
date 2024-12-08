import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#fff] text-white flex items-center justify-between px-6 py-5 border-b border-gray-700">
        {/* Search Bar */}
        <div className="flex items-center bg-white text-gray-300 rounded-lg overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent px-4 py-2 w-full focus:outline-black"
          />
          <button className="px-4 bg-gray-700 hover:bg-gray-600">
            🔍
          </button>
        </div>

        {/* Shopping Cart & Avatar */}
        <div className="flex items-center gap-6">
          {/* Shopping Cart */}
          <button className="relative">
            <Image
              src="/Shopping--cart.png" // Replace with your cart icon image
              alt="Cart"
              width={24}
              height={24}
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>

          {/* Avatar */}
          <Image
            src="/User--avatar.png" // Replace with your avatar image
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#fff] text-#726E8D py-10">
        <ul className="flex justify-center gap-6 text-lg">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Avion
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Plant Pots
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Ceramics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Tables
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Chairs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Crockery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Cutlery
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
