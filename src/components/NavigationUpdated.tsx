import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationUpdated: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Community', href: '/join-community' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-neutral-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between container-xl mx-auto h-[4.5rem]">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-all duration-300 group">
              {/* Enhanced Logo */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/the sav women initAITIVE.jpg"
                    alt="SAV WOMEN Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-1.5 h-1.5 text-white fill-current" />
                </div>
              </div>
              {/* Enhanced Text */}
              <div className="overflow-hidden">
                <h1 className="font-playfair font-bold text-lg bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent">
                  SAV WOMEN
                </h1>
                <p className="text-[11px] text-neutral-500 -mt-0.5 tracking-wider uppercase">
                  Empowering Women
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden lg:block flex-grow">
            <div className="flex items-center justify-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-2 xl:px-3 py-2 text-sm whitespace-nowrap font-medium transition-all duration-300 group",
                    isActive(item.href)
                      ? "text-green-800"
                      : "text-gray-700 hover:text-green-800"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div
                    className={cn(
                      "absolute inset-0 rounded-lg transition-all duration-300 opacity-0 -z-0",
                      isActive(item.href)
                        ? "bg-green-50/80 opacity-100"
                        : "group-hover:opacity-100 group-hover:bg-gray-50/80"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full transition-all duration-300",
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center ml-4">
            <Link to="/join-community">
              <Button
                className={cn(
                  "relative overflow-hidden group bg-gradient-to-r from-green-600 to-green-700",
                  "text-white font-semibold shadow-lg hover:shadow-xl",
                  "transition-all duration-300 transform hover:scale-105",
                  "px-6"
                )}
              >
                <span className="relative z-10 whitespace-nowrap">Join Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "relative overflow-hidden transition-all duration-300",
                isOpen ? "bg-green-50" : "hover:bg-green-50",
                "p-2"
              )}
            >
              <div className="relative transform transition-all duration-300">
                {isOpen ? (
                  <X className="h-6 w-6 text-green-800 transform rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 text-green-800 transform transition-transform duration-300" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "lg:hidden fixed right-0 top-16 w-full max-w-sm h-[calc(100vh-4rem)]",
          "bg-white shadow-xl border-l border-gray-100",
          "transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg",
                  "transition-all duration-300 transform hover:scale-105",
                  isActive(item.href)
                    ? "text-green-800 bg-green-50/80"
                    : "text-gray-700 hover:text-green-800 hover:bg-gray-50/80"
                )}
              >
                {item.name}
                <ChevronDown className="inline-block w-4 h-4 ml-2 transform -rotate-90" />
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link to="/join-community" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold relative overflow-hidden group">
                  <span className="relative z-10">Join Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationUpdated;