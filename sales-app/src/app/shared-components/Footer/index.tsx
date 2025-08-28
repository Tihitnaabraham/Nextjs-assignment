import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => (
  <footer className="bg-black text-white py-12 mt-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      
      {}
      <div>
        <h3 className="text-xl font-bold mb-4">Exclusive</h3>
        <p className="text-gray-300 mb-2">Subscribe</p>
        <p className="text-gray-400 text-sm mb-4">Get 10% off your first order</p>
        
        {}
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
          className="w-full px-4 py-2 bg-transparent text-white border-1 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5l8 7-8 7V5z" />
            </svg>
          </button>
        </div>
      </div>

      {}
      <div>
        <h3 className="text-xl font-bold mb-4">Support</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-2">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p className="text-gray-400 text-sm mb-2">exclusive@gmail.com</p>
        <p className="text-gray-400 text-sm">+88015-88888-9999</p>
      </div>

      {}
      <div>
        <h3 className="text-xl font-bold mb-4">Account</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="hover:text-white transition cursor-pointer">My Account</li>
          <li className="hover:text-white transition cursor-pointer">Login / Register</li>
          <li className="hover:text-white transition cursor-pointer">Cart</li>
          <li className="hover:text-white transition cursor-pointer">Wishlist</li>
          <li className="hover:text-white transition cursor-pointer">Shop</li>
        </ul>
      </div>

      {}
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Link</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white transition cursor-pointer">Terms Of Use</li>
          <li className="hover:text-white transition cursor-pointer">FAQ</li>
          <li className="hover:text-white transition cursor-pointer">Contact</li>
        </ul>
      </div>

      {}
      <div>
        <h3 className="text-xl font-bold mb-4">Download App</h3>
        <p className="text-gray-400 text-xs mb-4">Save $3 with App New User Only</p>
        <div className="flex items-start gap-2">
          {}
          <Image
            src={"/QR code.png"}
            alt="QR Code"
            className="w-17 h-18 rounded"
          />
          {}
          <div className="flex flex-col gap-2">
            <Image
              src="/google-play.png"
              alt="Google Play"
              className="h-7 w-auto"
            />
            <Image
              src="/app-store.png"
              alt="App Store"
              className="h-7 w-auto"
            />
          </div>
        </div>
        {}
        <div className="flex gap-4 mt-6 text-lg">
          <FaFacebookF className="text-gray-400 hover:text-white transition cursor-pointer" />
          <FaTwitter className="text-gray-400 hover:text-white transition cursor-pointer" />
          <FaInstagram className="text-gray-400 hover:text-white transition cursor-pointer" />
          <FaLinkedinIn className="text-gray-400 hover:text-white transition cursor-pointer" />
        </div>
      </div>
    </div>

    {}
    <div className="text-center text-gray-500 text-sm mt-10 pt-6 border-t border-gray-800">
      &copy; Copyright Rimel 2022. All right reserved
    </div>
  </footer>
);

export default Footer;