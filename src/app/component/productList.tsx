import React from 'react'


      // ProductList.tsx
const ProductList = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Product 1 */}
          <div className="product-item">
            <img src="/chair1.png" alt="New Ceramics" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">New Ceramics</h3>
            <p className="text-lg text-gray-600">£250</p>
         
          </div>
          
          {/* Product 2 */}
          <div className="product-item">
            <img src="/Parent.png" alt="The Dandy Chair" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">The Dandy Chair</h3>
            <p className="text-lg text-gray-600">£155</p>
            <a href="/collection" className="text-blue-500 hover:underline inline-block ml-59 pt-20 ">View collection</a>
          </div>

          {/* Product 3 */}
          <div className="product-item">
            <img src="/bottle.png" alt="Rustic Vase Set" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Rustic Vase Set</h3>
         
          </div>

          {/* Product 4 */}
          <div className="product-item">
            <img src="/lamp.png" alt="The Silky Vase" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">The Silky Vase</h3>
            <p className="text-lg text-gray-600">£399</p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;

