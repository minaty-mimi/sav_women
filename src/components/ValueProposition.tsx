import React from 'react';
import { Users, TrendingUp, Heart } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const valueProps = [
    {
      title: 'Empowerment',
      description: 'Building confidence and self-worth through mentorship, workshops, and personal development programs.',
      icon: <Heart className="h-12 w-12 text-green-800" />,
    },
    {
      title: 'Community',
      description: 'Connecting young women with like-minded peers, mentors, and role models in a supportive environment.',
      icon: <Users className="h-12 w-12 text-green-800" />,
    },
    {
      title: 'Growth Tools',
      description: 'Access to resources, scholarships, career guidance, and leadership development opportunities.',
      icon: <TrendingUp className="h-12 w-12 text-green-800" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering the Next Generation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SAV WOMEN is dedicated to supporting young women and girls through comprehensive programs 
            that build confidence, foster leadership, and create lasting community connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((valueProp, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {valueProp.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{valueProp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{valueProp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;