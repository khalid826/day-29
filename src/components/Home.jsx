import Navbar from './navbar';
import Footer from './footer';
import HomeMenu from './HomeMenu';

const Home = () => {
  return (
    <div className="App min-h-screen" style={{ backgroundColor: '#F2E3D5' }}>
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
            className="md:w-1/2 max-w-sm rounded-lg"
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

      <HomeMenu />

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
};

export default Home;