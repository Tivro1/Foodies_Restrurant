import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2D3748] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Food Street, Foodie City, USA</p>
            <p>Email: info@restaurant.com</p>
            <p>Phone: +123-456-7890</p>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <ul>
              <li>Mon-Fri: 11:00 AM - 10:00 PM</li>
              <li>Sat-Sun: 11:00 AM - 11:00 PM</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#menu" className="hover:text-yellow-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-yellow-400">
                  Reservations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; 2025 Restaurant Name. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-xl hover:text-yellow-400"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-yellow-400"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-yellow-400"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
