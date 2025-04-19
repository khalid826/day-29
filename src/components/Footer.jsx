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
  
  export default Footer;