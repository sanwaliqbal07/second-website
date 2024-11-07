// src/pages/about.js

const About = () => {
  return (
    <div className="bg-gray-300 min-h-screen p-6"> {/* Background color */}
      <h1 className="text-gray-800 text-center text-3xl md:text-4xl mt-4">About Spartix</h1> {/* Changed title text color */}
      <p className="text-black text-center mt-4 text-lg md:text-xl">
        Welcome to Spartix! We are, I mean, I am the Spartians, founded in 2024 with the creation of our website.
      </p>
      <h2 className="text-gray-800 text-center text-2xl md:text-3xl mt-6">Our Story</h2> {/* Changed heading text color */}
      <p className="text-black text-center mt-2 text-base md:text-lg">
        At Spartix, we believe in the power of community and connection. Our journey started when I had an assignment to create a website.
      </p>
      <h2 className="text-gray-800 text-center text-2xl md:text-3xl mt-6">What We Offer</h2> {/* Changed heading text color */}
      <p className="text-black text-center mt-2 text-base md:text-lg">
        We offer a wide range of products and collaboration opportunities!
      </p>
      <h2 className="text-gray-800 text-center text-2xl md:text-3xl mt-6">Join Us</h2> {/* Changed heading text color */}
      <p className="text-black text-center mt-2 text-base md:text-lg">
        You can join us by (idk). If you&apos;re wondering about the perks, you&apos;ll receive the mythical title <span className="text-gray-700">Spartians</span>.
      </p>
      <p className="text-gray-800 text-center mt-6 text-base md:text-lg">
        Thank you for being a part of Spartix's journey (which started just a week ago!).
      </p>
    </div>
  );
};

export default About;
