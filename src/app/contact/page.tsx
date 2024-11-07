// src/pages/contact.js

const Contact = () => {
  return (
    <div className="bg-gray-300 min-h-screen p-6"> {/* Updated background color */}
      <h1 className="text-gray-800 text-center text-4xl mt-10">Contact Us</h1> {/* Increased heading size */}
      <p className="text-black text-center mt-4 text-lg"> {/* Increased paragraph size */}
       I Would Love To Hear About You 
      </p>
      <h2 className="text-gray-800 text-center text-3xl mt-6">Get in Touch</h2> {/* Increased heading size */}
      <p className="text-black text-center mt-2 text-lg"> {/* Increased paragraph size */}
        You can contact us via email at <a href="mailto:info@spartix.com" className="text-teal-600">info@spartix.com</a> {/* Updated email */}
      </p>
      <p className="text-black text-center mt-2 text-lg"> {/* Increased paragraph size */}
        Or follow us on our social media channels:
      </p>
      <ul className="flex justify-center space-x-4 mt-4">
        <li>
          <a href="https://facebook.com/spartix" target="_blank" rel="noopener noreferrer" className="text-teal-600">Facebook</a> {/* Updated link */}
        </li>
        <li>
          <a href="https://instagram.com/spartix" target="_blank" rel="noopener noreferrer" className="text-teal-600">Instagram</a> {/* Updated link */}
        </li>
      </ul>
      <p className="text-black text-center mt-6 text-lg"> {/* Increased paragraph size */}
        Thank you for connecting with us! We can’t wait to hear from you.
      </p>
    </div>
  );
};

export default Contact;
