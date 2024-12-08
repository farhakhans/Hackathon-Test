import Image from "next/image";

const Header = () => {
  return (
    
     
      <div className="bg-[#1A1334] text-white flex items-center justify-between px-6 py-4 border-b border-gray-700">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 text-gray-300 rounded-lg overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent px-4 py-2 w-full focus:outline-none"
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
              src="/cart-icon.png" // Replace with your cart icon image
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
            src="/avatar-icon.png" // Replace with your avatar image
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        
         
         </div>
         </div>
        )};
        
