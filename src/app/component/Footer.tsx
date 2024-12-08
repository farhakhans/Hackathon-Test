import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
    
      <div>
        <h4 className="text-lg font-semibold mb-4">Menu</h4>
        <ul>
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">All products</a></li>
          <li><a href="#" className="hover:underline">Best sellers</a></li>
          <li><a href="#" className="hover:underline">New arrivals</a></li>
          <li><a href="#" className="hover:underline">Popular this week</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Categories</h4>
        <ul>
          <li><a href="#" className="hover:underline">Furniture</a></li>
          <li><a href="#" className="hover:underline">Chairs</a></li>
          <li><a href="#" className="hover:underline">Crockery</a></li>
          <li><a href="#" className="hover:underline">Plant pots</a></li>
          <li><a href="#" className="hover:underline">Homeware</a></li>
        </ul>
      </div>


      <div>
        <h4 className="text-lg font-semibold mb-4">Our company</h4>
        <ul>
          <li><a href="#" className="hover:underline">About us</a></li>
          <li><a href="#" className="hover:underline">Vacancies</a></li>
          <li><a href="#" className="hover:underline">Privacy</a></li>
          <li><a href="#" className="hover:underline">Returns policy</a></li>
          <li><a href="#" className="hover:underline">Contact us</a></li>
        </ul>
      </div>

      
      <div>
        <h4 className="text-lg font-semibold mb-4">Join our mailing list</h4>
        <p className="mb-4">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more.</p>
        <form className="flex flex-col">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="px-4 py-2 mb-4 border border-gray-600 rounded-md"
          />
          <button type="submit" className="px-4 py-2 bg-#4E4D93 text-white rounded-md hover:bg-blue-600">
            Sign up
          </button>
        </form>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
      <p>&copy; 2022 Avion LTD. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
