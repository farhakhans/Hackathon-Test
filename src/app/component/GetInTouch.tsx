
const GetinTouch = ()=>{
  return(



<section className="bg-gray-50 py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
    
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-semibold mb-6">
        From a studio in London to a global brand with over 400 outlets
      </h2>
      <p className="text-lg mb-8">
        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. 
        Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design, so our Chelsea boutique became 
        the hotbed for the London interior design community.
      </p>
      <h3 className="text-2xl font-semibold mb-4 pt-36">Get in touch</h3>
      <form className="flex justify-center md:justify-start">
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="px-4 py-2 border border-gray-300 rounded-l-md w-80 mb-4 md:mb-0" 
        />
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
          Subscribe
        </button>
      </form>
    </div>
    
  
    <div className="md:w-1/2">
      <img src="sofaflower.png" alt="Brand Image" className="w-full rounded-lg shadow-lg"/>
    </div>
  </div>
</section>
  )
}
export default GetinTouch
