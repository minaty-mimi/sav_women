import React, { useEffect, useState } from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Hero from './Hero';
import SAVWomenCarousel from './SAVWomenCarousel';
import ValueProposition from './ValueProposition';
import SuccessStories from './SuccessStories';
import About from './About';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { useScroll } from '@/hooks/use-scroll';

const AppLayout: React.FC = () => {
  const { scrolled, scrollProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative overflow-x-hidden">
      <NavigationUpdated />
      <main className="relative">
        {/* Hero Section */}
        <section id="hero" className="relative">
          <Hero />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-50 to-transparent"></div>
        </section>

        {/* Carousel Section */}
        <section id="carousel" className="relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
          <SAVWomenCarousel />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Value Proposition Section */}
        <section id="value-proposition" className="relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-green-50 to-transparent"></div>
          <ValueProposition />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-green-50 to-transparent"></div>
          <SuccessStories />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-green-50 to-transparent"></div>
          <About />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-emerald-50 to-transparent"></div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
          <Newsletter />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      {/* Enhanced scroll to top button with progress indicator */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-xl transition-all duration-500 
          transform group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            rgb(22 163 74) ${scrollProgress * 100}%, 
            rgb(16 185 129 / 0.2) ${scrollProgress * 100}%)`
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 p-2 bg-white rounded-full transform transition-all duration-500 
          group-hover:scale-110 group-hover:-translate-y-1">
          <svg
            className="w-5 h-5 text-green-600 group-hover:text-emerald-600 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </button>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AppLayout;