import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">SAV WOMEN</h3>
            <p className="text-gray-600 mb-4">
              Empowering young women to echo brilliance and inspiring change through community, mentorship, and growth opportunities.
            </p>
            <div className="flex space-x-4">
                              <Instagram className="h-6 w-6 text-gray-300 hover:text-green-800 cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-green-800 cursor-pointer" />
                <Mail className="h-6 w-6 text-gray-300 hover:text-green-800 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Programs</h4>
            <ul className="space-y-2">
                              <li><a href="#" className="hover:text-green-800">Mentorship</a></li>
                <li><a href="#" className="hover:text-green-800">Leadership</a></li>
                <li><a href="#" className="hover:text-green-800">Workshops</a></li>
                <li><a href="#" className="hover:text-green-800">Scholarships</a></li>
                <li><a href="#" className="hover:text-green-800">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Join Us</h4>
            <ul className="space-y-2">
                              <li><a href="#" className="hover:text-green-800">Join Us</a></li>
                <li><a href="#" className="hover:text-green-800">Events</a></li>
                <li><a href="#" className="hover:text-green-800">Blog</a></li>
                <li><a href="#" className="hover:text-green-800">Alumni</a></li>
                <li><a href="#" className="hover:text-green-800">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
                              <li><a href="#" className="hover:text-green-800">Contact</a></li>
                <li><a href="#" className="hover:text-green-800">FAQ</a></li>
                <li><a href="#" className="hover:text-green-800">Resources</a></li>
                <li><a href="#" className="hover:text-green-800">Volunteer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SAV WOMEN. All rights reserved. Empowering women, transforming communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;