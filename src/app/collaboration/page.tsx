// src/pages/collaboration.js


import Image from 'next/image'; // Import the Image component

const Collaboration = () => {
  return (
    <div className="bg-gray-300 min-h-screen p-6">
      
      <h1 className="text-gray-800 text-center text-4xl mt-4">Collaboration</h1>
      <p className="text-black text-center mt-2">
        Some Amazing People <span className="text-gray-700">Spartix</span> Collaborated with
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        
        {/* Collaboration Item 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/1.jpg"
            alt="Collaborator A"
            width={384} // Use appropriate dimensions
            height={384}
            className="object-cover mb-2"
          />
          <p className="text-black text-center">Our <span className="text-gray-700">Spartix</span> with Black Widow</p>
        </div>

        {/* Collaboration Item 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/2.jpg"
            alt="Collaborator B"
            width={384}
            height={384}
            className="object-cover mb-2"
          />
          <p className="text-black text-center">Our <span className="text-gray-700">Spartix</span> with Iron Man</p>
        </div>

        {/* Collaboration Item 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/3.jpg"
            alt="Collaborator C"
            width={384}
            height={384}
            className="object-cover mb-2"
          />
          <p className="text-black text-center">Our <span className="text-gray-700">Spartix</span> with Ben 10</p>
        </div>

        {/* Collaboration Item 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/4.jpg"
            alt="Collaborator D"
            width={384}
            height={384}
            className="object-cover mb-2"
          />
          -<p className="text-black text-center">Our <span className="text-gray-900">Spartix</span> with Spider Man</p>
        </div>

      </div>
    </div>
  );
};

export default Collaboration;
