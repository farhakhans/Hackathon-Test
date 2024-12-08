import React from 'react'

const Signup = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-4">Join the club and get the benefits</h2>
    <p className="text-lg mb-6">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more.
    </p>
    <form className="flex justify-center">
      <input 
        type="email" 
        placeholder="your@email.com" 
        className="px-4 py-2 border border-gray-300 rounded-l-md w-80" 
      />
      <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
        Sign up
      </button>
    </form>
  </div>
</section>

    </div>
  )
}

export default Signup
