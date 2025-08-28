import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: 'Amara Johnson',
      role: 'Founder & CEO',
      quote: 'I founded SAV WOMEN with a vision to empower young women and create lasting positive change in our communities.',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Diana Moses',
      role: 'Program Director',
      quote: 'I lead our programs and initiatives, ensuring every woman has access to the resources and support she needs to thrive.',
      image: '/light skined.png'
    },
    {
      name: 'Halima Isa',
      role: 'Community Outreach',
      quote: 'I connect with communities and build partnerships to expand our reach and impact across different regions.',
      image: '/muslim.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600">
            Meet the incredible women who lead and drive our SAV WOMEN initiative
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-green-800 text-sm">{story.role}</p>
                <p className="text-gray-600 mt-2">{story.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;