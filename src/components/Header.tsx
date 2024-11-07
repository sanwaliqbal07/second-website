import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-300 p-4"> 
      <div className="flex items-center">
        <Image 
          src="/12_99.jpg" // Your image path
          alt="Pookie&apos;s Logo"
          width={80}
          height={50}
          className="rounded-full mr-2"
        />
        <h1 className="text-zinc-700 text-3xl md:text-4xl">Spartix</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link href="/" passHref>
              <Button variant="default" className="text-zinc-800 rounded-xl hover:bg-teal-400 hover:text-yellow-500 text-lg md:text-2xl px-6 py-6">
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/collaboration" passHref>
              <Button variant="default" className="text-zinc-800 rounded-xl hover:bg-teal-400 hover:text-yellow-500 text-lg md:text-2xl px-6 py-6">
                Collaboration
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <Button variant="default" className="text-zinc-800 rounded-xl hover:bg-teal-400 hover:text-yellow-500 text-lg md:text-2xl px-6 py-6">
                Products
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <Button variant="default" className="text-zinc-800 rounded-xl hover:bg-teal-400 hover:text-yellow-500 text-lg md:text-2xl px-6 py-6">
                About
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <Button variant="default" className="text-zinc-800 rounded-xl hover:bg-teal-400 hover:text-yellow-500 text-lg md:text-2xl px-6 py-6">
                Contact
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
