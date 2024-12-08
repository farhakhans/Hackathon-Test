import React from 'react'


const PopularProducts = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="product-item text-center">
            <img src="/sofabed.png" alt="The Poplar Suede Sofa" className="w-[600px] h-64 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-left ">The Poplar Suede Sofa</h3>
            <p className="text-lg text-gray-600 text-left ">£980</p>
            <div className="mt-4 flex justify-center">
          
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-item text-center">
            <img src="/chair1.png" alt="The Dandy Chair" className=" h-64 ml-16 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-left ml-14">The Dandy Chair</h3>
            <p className="text-lg text-gray-600 text-left ml-16">£250</p>
            <div className="mt-4 flex justify-center">
              <a href="/collection" className="inline-block text-blue-500 hover:underline pt-14">View collection</a>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-item text-center">
            <img src="/blackchair.png" alt="The Dandy Chair" className=" h-64 ml-20 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-left ml-20">The Dandy Chair</h3>
            <p className="text-lg text-gray-600 text-left ml-20">£250</p>
            <div className="mt-4 flex justify-center">
  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

