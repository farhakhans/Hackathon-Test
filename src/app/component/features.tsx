import React from 'react'


const BrandFeatures = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="feature-item">
            <img src="/delivery_709790.png" alt="Next day delivery" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Next day as standard</h3>
            <p className="text-gray-600">Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="feature-item">
            <img src="/check_12646423.png" alt="Made by artisans" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Made by true artisans</h3>
            <p className="text-gray-600">Handmade crafted goods made with real passion and craftsmanship</p>
          </div>
          <div className="feature-item">
            <img src="/list_9044613.png" alt="Unbeatable prices" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Unbeatable prices</h3>
            <p className="text-gray-600">For our materials and quality you won't find better prices anywhere</p>
          </div>
          <div className="feature-item">
            <img src="/Sprout.png" alt="Recycled packaging" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Recycled packaging</h3>
            <p className="text-gray-600">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      
      </div>
    
    </section>
    
  );
};

export default BrandFeatures;


