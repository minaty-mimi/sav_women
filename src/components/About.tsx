import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-green-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/the sav women initAITIVE.jpg" 
              alt="SAV WOMEN Mission"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SAV WOMEN
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SAV WOMEN was founded this year with a simple yet powerful mission: to create a world where 
              every young woman has the confidence, resources, and community support needed to 
              achieve her dreams and make a lasting impact.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We believe that when women are empowered, entire communities thrive. Through our 
              comprehensive programs, mentorship opportunities, and vibrant community network, 
              we're building the next generation of confident, capable leaders.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                <span>Leadership development programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                <span>Mentorship opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                <span>Community networking events</span>
              </div>
            </div>
            <Link to="/about">
              <Button size="lg" className="bg-green-800 hover:bg-green-900 mt-6">
                Learn More About Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;