import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logoImage from '../assets/loan.png'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-orange-400 flex justify-between items-center text-white font-semibold w-full h-[70px] px-4 fixed top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logoImage} alt="Loan Logo" className="h-10" /> {/* Adjust the height as needed */}
        <span className="ml-4 text-xl text-black">My Loan</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className=" hover:text-black">Home</Link>
        </li>
        <li>
          <Link to="/about" className=" hover:text-black">About</Link>
        </li>
        <li>
          <Link to ="/services" className=" hover:text-black">Services</Link>
        </li>
        <li>
          <Link to ="/calculator" className=" hover:text-black">EMI Calculator</Link>
        </li>
        <li>
          <Link to ="/faqs" className=" hover:text-black">FAQ'S</Link>
        </li>
        <li>
          <Link to="/contact" className=" hover:text-black">Contact Us</Link>
        </li>
      </ul>

      {/* Apply Now Button (Desktop) */}
      <div className="hidden md:flex">
        <Link to="/application" className="bg-green-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-800 transition">
          Apply Now
        </Link>
      </div>

      {/* Hamburger Icon (Mobile View) */}
      <div onClick={handleNav} className="md:hidden cursor-pointer z-50">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-gray-800 p-8 ease-in-out duration-500 z-40' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <div className="flex flex-col">
          <img src={logoImage} alt="Loan Logo" className="h-12 mb-4" /> {/* Adjust the height as needed */}
          <ul className="text-lg text-white">
            <li className="p-4 border-b border-gray-600">
              <Link to="/" onClick={() => setNav(false)}>Home</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/about" onClick={() => setNav(false)}>About</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/services" onClick={() => setNav(false)}>Services</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/calculator" onClick={() => setNav(false)}>EMI Calculator</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/faqs" onClick={() => setNav(false)}>FAQ'S</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/contact" onClick={() => setNav(false)}>Contact Us</Link>
            </li>
          </ul>

          {/* Apply Now Button (Mobile) */}
          <div className="mt-6">
            <Link to="/application" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition w-full text-center" onClick={() => setNav(false)}>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
