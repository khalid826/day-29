import { useState } from 'react';

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

export default Navbar;