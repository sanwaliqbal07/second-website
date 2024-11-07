// src/pages/products.js

import Image from 'next/image'; // Import the Image component

const products = [
  {
    id: 1,
    name: 'Corinthian helmet',
    description: 'Common Pookie.',
    price: '220pkr',
    image: '/a.jpg', // Changed image path
  },
  {
    id: 2,
    name: 'Aspis',
    description: 'Special Epic Pookie.',
    price: '550pkr',
    image: '/b.jpg', // Changed image path
  },
  {
    id: 3,
    name: 'Doru',
    description: 'Special Legendary Pookie.',
    price: '1100pkr',
    image: '/c.jpg', // Changed image path
  },
  {
    id: 4,
    name: 'Sandals',
    description: 'Special Mythical Pookie.',
    price: '2000pkr',
    image: '/d.jpg', // Changed image path
  },
];

const Products = () => {
  return (
    <div className="bg-gray-300 min-h-screen p-6"> {/* Changed background color to match collaboration */}
      <h1 className="text-gray-800 text-center text-4xl mt-4">Products</h1> {/* Updated title color */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {products.map(product => (
          <div key={product.id} className="border border-gray-400 rounded-lg p-4"> {/* Added border color */}
            <Image
              src={product.image}
              alt={product.name}
              width={700} // Increased width for larger images
              height={500} // Increased height for larger images
              className="w-full h-40 object-cover mb-2" // Adjusted height class for better fit
            />
            <h2 className="text-gray-800 text-xl text-center">{product.name}</h2> {/* Updated text color */}
            <p className="text-black text-center">{product.description}</p> {/* Updated text color */}
            <p className="text-black text-center font-bold">{product.price}</p> {/* Updated text color */}
            <button className="mt-2 w-full bg-teal-600 text-white p-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
