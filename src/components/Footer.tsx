
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-primary-800 mb-4">EcoRecycle</h3>
            <p className="text-gray-600 mb-6">
              Making e-waste recycling easy and accessible for everyone, one pickup at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-primary-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">E-Waste Pickup</Link></li>
              <li><Link to="/awareness" className="text-gray-600 hover:text-primary-600 transition-colors">Responsible Recycling</Link></li>
              <li><Link to="/awareness" className="text-gray-600 hover:text-primary-600 transition-colors">Data Destruction</Link></li>
              <li><Link to="/awareness" className="text-gray-600 hover:text-primary-600 transition-colors">Corporate Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-primary-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">How It Works</Link></li>
              <li><Link to="/awareness" className="text-gray-600 hover:text-primary-600 transition-colors">Awareness</Link></li>
              <li><Link to="/register" className="text-gray-600 hover:text-primary-600 transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-primary-800 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">123 Green Street</li>
              <li className="text-gray-600">Eco City, EC 12345</li>
              <li className="text-gray-600">support@ecorecycle.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EcoRecycle. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">Cookie Policy</Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-xs text-gray-400 flex items-center justify-center">
              Made with <Heart size={12} className="mx-1 text-red-500" /> for a cleaner planet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
