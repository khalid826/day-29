import { useState } from 'react';
import './App.css';

// Navbar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#632B15' }}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <img 
          src="https://ugc.production.linktr.ee/44e4a000-ff91-4bde-87e3-9b7b70515321_Desain-tanpa-judul--2-.png?io=true&size=avatar-v3_0" 
          alt="Balcon Logo" 
          width="64"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <a href="/" className="px-3 py-2 text-white hover:text-gray-300 transition">Home</a>
          <a href="/product-detail" className="px-3 py-2 text-white hover:text-gray-300 transition">Menu</a>
          <a href="/about" className="px-3 py-2 text-white hover:text-gray-300 transition">About</a>
          <a href="/service" className="px-3 py-2 text-white hover:text-gray-300 transition">Service</a>
          <a href="/subscribe" className="px-3 py-2 text-white hover:text-gray-300 transition">Newsletter</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden flex flex-col items-center space-y-2 pb-4 transition-all duration-300`}
      >
        <a href="/" className="block px-3 py-2 text-white hover:text-gray-300 transition">Home</a>
        <a href="/product-detail" className="block px-3 py-2 text-white hover:text-gray-300 transition">Menu</a>
        <a href="/about" className="block px-3 py-2 text-white hover:text-gray-300 transition">About</a>
        <a href="/service" className="block px-3 py-2 text-white hover:text-gray-300 transition">Service</a>
        <a href="/subscribe" className="block px-3 py-2 text-white hover:text-gray-300 transition">Newsletter</a>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white py-8 mt-10" style={{ backgroundColor: '#632B15' }}>
      <div className="container mx-auto flex flex-col gap-6 md:flex-row md:justify-between text-center md:text-left px-6">
        {/* Open Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Open Hours</h3>
          <p>Weekdays: 11 AM - 9 PM</p>
          <p>Weekends: 11 AM - 10 PM</p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p>Jl. BENTENG BETAWI, RUKO PALEM</p>
          <p>TAMAN ROYAL NO: 3, PORIS No.5</p>
          <p>Kec. Cipondoh, Banten 15141</p>
          <p>Phone: +6282160008113</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a 
              href="https://www.instagram.com/balcontamanroyal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-pink-600 transition" 
              aria-label="Instagram"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram" 
                className="w-8 h-8"
              />
            </a>
            
            <a 
              href="https://www.tiktok.com/@balcontamanroyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-black transition" 
              aria-label="TikTok"
            >
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/016/716/485/small_2x/tiktok-icon-free-png.png" 
                alt="TikTok" 
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
        
        {/* Subscribe Now */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Subscribe Now</h3>
          <p className="text-sm">Stay updated with our latest offers and news.</p>
          <a 
            href="/subscribe" 
            className="inline-block mt-6 px-4 py-2 bg-[#F9C06A] text-black rounded hover:bg-[#e0a859] transition"
          >
            Subscribe
          </a>
        </div>
      </div>
      
      {/* Copyright Notice */}
      <div className="text-center mt-6 border-t border-white pt-4">
        <p>&copy; 2025 D'BALCON. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#F2E3D5' }}>
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto text-center py-10 pt-32">
        <h1 className="text-yellow-700 text-4xl font-bold">Welcome to D'BALCON</h1>
        <p className="text-gray-700 mt-4 text-xl font-semibold">
          We offer a wide selection of menu options for loyal D'BALCON customers. 
        </p>
        <p className="text-gray-700 text-xl font-semibold">We provide the best service, quality, and taste at prices that remain affordable for everyone.</p>
      </div>

      {/* Today's Promo Section */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-yellow-700 text-3xl font-bold mb-4">Today's Promo</h2>
        <div className="bg-[#9E5334] p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
          {/* Promo Image */}
          <img 
            src="../public/images/product-img1.jpg" 
            alt="Promo Product" 
            className="w-full md:w-1/2 rounded-lg"
          />
          
          {/* Promo Info */}
          <div className="text-left text-white">
            <h3 className="text-2xl font-bold">Espresso</h3>
            <p className="text-lg">Coffee</p>
            <p className="text-justify mt-2">
              Strong and concentrated Italian-style coffee served in small shots. 
              Perfect for a quick energy boost.
            </p>
            <p className="mt-2 font-semibold">Variants: Single, Double, Hot, Iced</p>
            <p className="mt-2">Price: Rp 25000.00</p>
            <p className="mt-1 text-yellow-400">⭐⭐⭐⭐☆ (4.5/5)</p>
          </div>
        </div>
      </section>

      {/* Order Now Button */}
      <div className="text-center mt-10">
        <a 
          href="https://wa.me/6282160008113" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#F9C06A] text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0a859] transition"
        >
          Order Now
        </a>
      </div>

      {/* Newsletter Subscription Section */}
      <section className="w-full bg-white mt-10 py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6">
          <p className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
            Stay updated! Subscribe to our newsletter for the latest offers and news.
          </p>
          <a 
            href="subscribe.html" 
            className="bg-[#F9C06A] text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0a859] transition"
          >
            Subscribe Now
          </a>
        </div>
      </section>

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

      {/* About Us Section */}
      <section className="w-full bg-[#9E5334] mt-10 py-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">About Us</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start text-center md:text-left px-6">
          <img 
            src="https://www.tangerangkota.go.id/files/berita/40135rayakan-hari-istimewamu-di-dbalcon-indonesian-food-and-coffee-kota-tangerang-40135.jpeg" 
            alt="About Us" 
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
          />
          <div className="md:ml-6 w-full">
            <p className="text-white text-justify mb-12">
              D'BALCON is more than just a coffee shop—it's a place where rich aromas and warm ambiance come together. 
              We take pride in serving high-quality coffee made from carefully selected beans, ensuring every cup delivers 
              a perfect balance of flavor and aroma. Whether you're here for a quick caffeine fix, a relaxing break, or 
              a casual meeting, our cozy atmosphere and friendly service will make you feel right at home.
            </p>
            <a 
              href="about.html" 
              className="bg-[#F9C06A] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e0a859] transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;