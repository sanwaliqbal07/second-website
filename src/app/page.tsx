// src/pages/index.js

import Link from 'next/link'; // Import Link from Next.js

const Home = () => {
  return (
    <div className="bg-gray-300 min-h-screen p-6"> {/* Updated background color */}
      
      <h1 className="text-gray-800 text-center text-4xl md:text-5xl mt-4">
        Welcome to Spartix!
      </h1>
      
      <p className="text-black text-center mt-4 text-lg md:text-xl">
        Where whimsy meets community. Join the fun!
      </p>
      
      <div className="mt-8 flex justify-center space-x-4">
        <Link href="/about" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
          Learn More About Us
        </Link>
        <Link href="/products" className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition">
          Explore Our Products
        </Link>
      </div>

      <h2 className="text-gray-800 text-center text-3xl md:text-4xl mt-6">Why Choose Spartix?</h2>
      
      <p className="text-black text-center mt-2 text-base md:text-lg">
        At Spartix, we celebrate creativity, connection, and all things fun! 
        Whether you&apos;re here to shop or just hang out, there&apos;s something for everyone.
      </p>

      <h2 className="text-gray-800 text-center text-3xl md:text-4xl mt-6">Join the Adventure!</h2>
      <p className="text-black text-center mt-2 text-base md:text-lg">
        Be part of our quirky community! Get exclusive updates, events, and the legendary title of 
        <span className="text-gray-600"> Spartix!</span>
      </p>

      <div className="mt-8 flex justify-center">
        <Link href="/contact" className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">
          Contact Us
        </Link>
      </div>

      <footer className="text-black text-center mt-6 text-base md:text-lg">
        <p>Thanks for stopping by! We can&apos;t wait to share our journey with you.</p>
      </footer>
    </div>
  );
};

export default Home;
