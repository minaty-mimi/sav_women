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
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-50 via-white to-green-50/30 py-12">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
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
  );
};

export default About;