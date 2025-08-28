import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 flex items-center bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-300 mb-2">
                The Sound and Vibrant Women Initiative
              </h2>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Young Women to 
              <span className="text-yellow-300 block">Echo Brilliance</span>
              <span className="text-yellow-300 block">and Inspiring Change</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl">
              Building confidence, leadership, and community for the next generation of powerful women
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/join">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Join the Movement
                </Button>
              </Link>
              <Link to="/community">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  Read Stories
                </Button>
              </Link>
              <Link to="/resources">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Photo Space */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
              {/* SAV WOMEN Logo */}
              <img 
                src="/the sav women initAITIVE.jpg" 
                alt="SAV WOMEN Logo" 
                className="w-full h-full object-cover rounded-2xl"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;