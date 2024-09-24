import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import React Icons

const Footer = () => {
  return (
    <section className="">
      <footer className="bg-orange-500  max-w-full w-full text-black p-6 text-center">
        <div className="container">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Company Section */}
            <div>
              <h3 className="font-bold text-lg text-black">THE COMPANY</h3>
              <ul className="mt-4">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Security</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            {/* Resources Section */}
            <div>
              <h3 className="font-bold text-lg text-black">RESOURCES</h3>
              <ul className="mt-4">
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Media Coverage</a></li>
              </ul>
            </div>
            {/* Partners Section */}
            <div>
              <h3 className="font-bold text-lg text-black">PARTNERS</h3>
              <ul className="mt-4">
                <li><a href="#" className="hover:underline">Lending Partners</a></li>
                <li><a href="#" className="hover:underline">Banking Partners</a></li>
                <li><a href="#" className="hover:underline">Business Partners</a></li>
              </ul>
            </div>
            {/* Products Section */}
            <div>
              <h3 className="font-bold text-lg text-black">PRODUCTS</h3>
              <ul className="mt-4">
                <li><a href="#" className="hover:underline">Personal Loan</a></li>
                <li><a href="#" className="hover:underline">Credit Tracker</a></li>
                <li><a href="#" className="hover:underline">Business Loan</a></li>
                <li><a href="#" className="hover:underline">Smart Pay</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Us Section */}
          <div className="mt-8">
            <h3 className="font-bold text-lg text-black">CONTACT US</h3>
            <p className="mt-4">care@myloan.in | 080 6939 0476</p>
            <p className="mt-2">Customer Support | FAQs</p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-6 h-6 text-white hover:text-blue-500 transition" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="w-6 h-6 text-white hover:text-red-500 transition" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="w-6 h-6 text-white hover:text-blue-700 transition" />
            </a>
          </div>
          
          {/* Footer Disclaimer */}
          <div className="mt-8 text-sm">
            <p>©2024 WhizDM Innovations Pvt. Ltd.</p>
            <p>Sitemap | Privacy Policy | Other Disclosures | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer