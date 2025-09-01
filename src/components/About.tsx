import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      title: 'Leadership development programs',
      description: 'Comprehensive training to build confidence and leadership skills through interactive workshops and mentorship.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mentorship opportunities',
      description: 'Connect with experienced mentors who guide your journey and provide personalized career development support.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Community networking events',
      description: 'Build lasting relationships in our supportive community through exclusive events and collaborative initiatives.',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-neutral-50 via-white to-green-50/30 relative py-12 flex items-center">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23047857%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            {/* Enhanced image container with 3D effect */}
            <div className="relative transform transition-all duration-500 group-hover:rotate-2">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tl from-emerald-400 to-teal-400 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-70"></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/the sav women initAITIVE.jpg"
                  alt="SAV WOMEN Mission"
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent rounded-2xl"></div>
                
                {/* Floating badges */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-sm text-neutral-800 font-medium tracking-wide">Est. 2025</span>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-sm text-neutral-800 font-medium tracking-wide">500+ Members</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-neutral-200 px-4 py-2 rounded-lg mb-6 shadow-sm hover:shadow-md transition-all duration-500">
                <BookOpen className="w-4 h-4 text-green-800" />
                <span className="text-xs font-medium text-neutral-800 tracking-wide uppercase">About SAV WOMEN</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-neutral-900 mb-6 leading-tight">
                Empowering <span className="bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent">Every Voice</span>
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  SAV WOMEN was founded with a powerful mission: to create a world where every young woman has the 
                  <span className="font-medium text-neutral-800"> confidence</span>, 
                  <span className="font-medium text-neutral-800"> resources</span>, and 
                  <span className="font-medium text-neutral-800"> community support</span> to achieve her dreams.
                </p>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  When women are empowered, communities thrive. Through our programs, mentorship, and network,
                  we're building the next generation of confident leaders.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} 
                  className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-neutral-100 
                    hover:bg-white/90 transition-all duration-500 hover:shadow-md group transform hover:-translate-y-1"
                >
                  <div>
                    <h3 className="text-sm font-medium text-neutral-800 group-hover:text-green-800 transition-colors mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-600 group-hover:text-neutral-700 transition-colors leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg" className="bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 
                hover:from-green-900 hover:via-emerald-800 hover:to-teal-800 text-white font-medium
                px-6 py-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 
                transform hover:-translate-y-1 tracking-wide group text-sm"
              >
                Learn More About Our Mission
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;