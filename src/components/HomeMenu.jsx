const HomeMenu = () => {
    return (
      <>
        {/* Coffee Menu Section */}
        <section className="container mx-auto px-6 text-center mt-10">
          <h2 className="text-yellow-700 text-3xl font-bold mb-8">Our Coffee Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Cards */}
            <div className="bg-gray-100 rounded-tr-3xl rounded-bl-3xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
              <img 
                src="../public/images/product-img2.jpg" 
                alt="Americano" 
                className="w-full h-64 object-cover rounded-tr-3xl"
              />
              <div className="p-4">
                <h3 className="text-yellow-700 text-xl font-bold">Americano</h3>
                <p className="text-gray-700">Rp 25000.00</p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-tr-3xl rounded-bl-3xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
              <img 
                src="../public/images/product-img3.jpg" 
                alt="Vietnam Drip" 
                className="w-full h-64 object-cover rounded-tr-3xl"
              />
              <div className="p-4">
                <h3 className="text-yellow-700 text-xl font-bold">Vietnam Drip</h3>
                <p className="text-gray-700">Rp 31000.00</p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-tr-3xl rounded-bl-3xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
              <img 
                src="../public/images/product-img4.jpg" 
                alt="Tubruk Indonesia" 
                className="w-full h-64 object-cover rounded-tr-3xl"
              />
              <div className="p-4">
                <h3 className="text-yellow-700 text-xl font-bold">Tubruk Indonesia</h3>
                <p className="text-gray-700">Rp 25000.00</p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-tr-3xl rounded-bl-3xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
              <img 
                src="../public/images/product-img5.jpg" 
                alt="Latte" 
                className="w-full h-64 object-cover rounded-tr-3xl"
              />
              <div className="p-4">
                <h3 className="text-yellow-700 text-xl font-bold">Latte</h3>
                <p className="text-gray-700">Rp 31000.00</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <a 
              href="product-detail.html" 
              className="bg-[#F9C06A] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0a859] transition"
            >
              View Full Menu
            </a>
          </div>
        </section>
      </>
    );
  };
  
  export default HomeMenu;