import React from 'react';
import { Instagram, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gradient-to-br from-neutral-900 via-green-900 to-green-800 text-white relative overflow-hidden py-8 sm:py-12">
      {/* Enhanced background decorative elements - optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6 group">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br from-green-700 to-green-600 p-[1px] shadow-sm transform transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src="/the sav women initAITIVE.jpg"
                    alt="SAV WOMEN Logo"
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-300 bg-clip-text text-transparent transform transition-all duration-500">
                SAV WOMEN
              </h3>
            </div>
            <p className="text-neutral-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed max-w-md">
              Empowering women to <span className="text-neutral-100 font-medium">echo brilliance</span> and inspiring change through 
              <span className="text-neutral-100 font-medium"> community</span>, 
              <span className="text-neutral-100 font-medium"> mentorship</span>, and growth opportunities.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.instagram.com/the_sav_women_initiative" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-white/20 flex items-center justify-center">
                  <Instagram className="h-4 sm:h-5 w-4 sm:w-5 text-neutral-300 group-hover:text-white transition-all duration-500" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-white/20 flex items-center justify-center">
                  <Linkedin className="h-4 sm:h-5 w-4 sm:w-5 text-neutral-300 group-hover:text-white transition-all duration-500" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-white/20 flex items-center justify-center">
                  <Mail className="h-4 sm:h-5 w-4 sm:w-5 text-neutral-300 group-hover:text-white transition-all duration-500" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-6 text-sm tracking-wide uppercase">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                { text: "Mentorship", to: "/resources" },
                { text: "Leadership", to: "/resources" },
                { text: "Workshops", to: "/events" },
                { text: "Scholarships", to: "/resources" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="text-neutral-400 hover:text-white transition-all duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-white/30 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-6 text-sm tracking-wide uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { text: "Events", to: "/events" },
                { text: "Blog", to: "/blog" },
                { text: "Resources", to: "/resources" },
                { text: "Support", to: "/privacy" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="text-neutral-400 hover:text-white transition-all duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-white/30 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-6 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-neutral-400 text-center sm:text-left text-xs sm:text-sm order-2 sm:order-1">
              <span className="inline-flex items-center flex-wrap justify-center sm:justify-start gap-1">
                &copy; 2024 SAV WOMEN. All rights reserved. Made with 
                <Heart className="inline w-3 sm:w-4 h-3 sm:h-4 text-red-400" /> 
                for empowering women 
                <span className="text-white font-medium">
                  worldwide
                </span>.
              </span>
            </p>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 
                rounded-lg p-1.5 sm:p-2 transform transition-all duration-500 hover:-translate-y-1 order-1 sm:order-2"
            >
              <ArrowUp className="w-3 sm:w-4 h-3 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;