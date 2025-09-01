import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const primaryNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Join Our Community', href: '/join-community' },
  ];

  const secondaryNavItems = [
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Meet Our Team', href: '/team' },
    { name: 'Todo App', href: '/tools/todo' }
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Logo */}
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/the sav women initAITIVE.jpg" 
                  alt="SAV WOMEN Logo" 
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Text */}
              <div className="transform transition-all duration-300 group-hover:translate-x-1">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-teal-600 bg-clip-text text-transparent">SAV WOMEN</h1>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
              <div className="h-4 w-px bg-gray-300 mx-2" /> {/* Divider */}
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-gray-600 hover:text-green-800 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-full hover:bg-green-50 transition-all duration-300"
            >
              {isOpen ? 
                <X className="h-6 w-6 text-green-800 transform rotate-0 transition-transform duration-300" /> : 
                <Menu className="h-6 w-6 text-green-800 transform rotate-0 transition-transform duration-300" />
              }
            </Button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-xl rounded-b-2xl">
          {/* Primary Nav Items */}
          {primaryNavItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-700 hover:text-green-800 block px-4 py-3 text-base font-medium rounded-lg hover:bg-green-50 transition-all duration-300"
              onClick={() => setIsOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'slideIn 0.4s ease forwards' : 'none'
              }}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Divider */}
          <div className="my-2 border-t border-gray-200" />
          
          {/* Secondary Nav Items */}
          {secondaryNavItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-600 hover:text-green-800 block px-4 py-3 text-base font-medium rounded-lg hover:bg-green-50 transition-all duration-300"
              onClick={() => setIsOpen(false)}
              style={{
                animationDelay: `${(index + primaryNavItems.length) * 50}ms`,
                animation: isOpen ? 'slideIn 0.4s ease forwards' : 'none'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;