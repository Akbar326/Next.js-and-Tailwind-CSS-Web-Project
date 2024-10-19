import Link from "next/link";

export default function Navbar() {
  return (
<nav className="bg-opacity-80 bg-blue-900 backdrop-blur-lg text-white py-3 shadow-lg">
      <ul className="flex space-x-10 justify-center">
        <li className="group">
          <Link href="/" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Home
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/about" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            About
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/services" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Services
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/contact" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/blog" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Blog
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

