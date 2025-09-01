import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full pt-16 flex items-center bg-gradient-to-br from-neutral-50 via-white to-green-50/30 text-slate-900">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-600/5 to-teal-600/5 rounded-full blur-3xl animate-pulse-slow transform-gpu"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-teal-600/5 to-green-600/5 rounded-full blur-3xl animate-pulse-slow delay-1000 transform-gpu"></div>
        {/* Removed animated gradient for a cleaner look */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23047857%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full px-4 sm:px-6 lg:px-8">
          {/* Left Column - Enhanced Text Content */}
          <div className="flex flex-col justify-center animate-slide-in">
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 px-3 py-1.5 rounded-full mb-3">
                <span className="text-xs font-medium text-teal-700">The Sound and Vibrant Women Initiative</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 leading-tight tracking-tight">
              <span className="block transform transition-all duration-700">Empowering Women to</span>
              <span className="block bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent animate-fade-in delay-300 transform transition-all duration-700">
                Echo Brilliance
              </span>
              <span className="block bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent animate-fade-in delay-500 transform transition-all duration-700">
                & Inspire Change
              </span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg mb-6 max-w-2xl leading-relaxed animate-fade-in delay-700 text-neutral-600">
              Building confidence, leadership, and community for the next generation of powerful women
              through <span className="text-green-800 font-medium">comprehensive programs</span>, 
              <span className="text-emerald-800 font-medium"> mentorship</span>, and
              <span className="text-teal-800 font-medium"> transformative experiences</span>.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 animate-fade-in delay-900">
              <div className="text-center p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-500 transform hover:-translate-y-1">
                <div className="text-xl md:text-2xl font-bold font-playfair bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent mb-1">500+</div>
                <div className="text-xs font-medium text-neutral-600 tracking-wide uppercase">Women Empowered</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-500 transform hover:-translate-y-1">
                <div className="text-xl md:text-2xl font-bold font-playfair bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-xs font-medium text-neutral-600 tracking-wide uppercase">Programs Launched</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-500 transform hover:-translate-y-1">
                <div className="text-xl md:text-2xl font-bold font-playfair bg-gradient-to-r from-teal-800 to-green-700 bg-clip-text text-transparent mb-1">25+</div>
                <div className="text-xs font-medium text-neutral-600 tracking-wide uppercase">Communities Built</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-1000 mt-6">
              <Link to="/join" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 hover:from-green-900 hover:via-emerald-800 hover:to-teal-800 text-white font-medium text-sm px-6 py-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                  Join the Movement
                </Button>
              </Link>
              <Link to="/community" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 font-medium text-sm px-6 py-5 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1">
                  Read Stories
                </Button>
              </Link>
              <Link to="/resources" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 font-medium text-sm px-6 py-5 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Enhanced Photo Space */}
          <div className="flex items-center justify-center animate-fade-in delay-1200 mt-8 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="w-full aspect-square bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl border border-white/30 flex items-center justify-center overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                {/* SAV WOMEN Logo with enhanced styling */}
                <div className="relative w-full h-full p-6 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/the sav women initAITIVE.jpg"
                    alt="SAV WOMEN Logo"
                    className="w-full h-full object-cover rounded-2xl shadow-lg transform-gpu"
                    style={{ objectPosition: 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:from-black/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-slate-400 rounded-full mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;