import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Hero from './Hero';
import SAVWomenCarousel from './SAVWomenCarousel';
import ValueProposition from './ValueProposition';
import SuccessStories from './SuccessStories';
import About from './About';
import Newsletter from './Newsletter';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavigationUpdated />
      <main>
        <Hero />
        <SAVWomenCarousel />
        <ValueProposition />
        <SuccessStories />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;