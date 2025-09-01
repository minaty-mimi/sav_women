import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: 'Amina Mustapha',
      role: 'Founder & CEO',
      quote: 'I founded SAV WOMEN with a vision to empower young women and create lasting positive change in our communities. Together, we\'re building a future where every woman can achieve her dreams.',
      image: '/founder.png',
      achievements: ['500+ Women Empowered', '10+ Programs Launched', 'Community Impact Award']
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Meet Our Founder
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            The visionary leader behind SAV WOMEN
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <Badge variant="outline" className="mb-4 self-start bg-neutral-50 text-neutral-800 border-neutral-200 px-3 py-1 text-sm font-medium">
                      {story.role}
                    </Badge>

                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                      {story.name}
                    </h3>

                    <p className="text-neutral-600 text-base md:text-lg mb-8 italic leading-relaxed">
                      "{story.quote}"
                    </p>

                    <div className="space-y-4">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center gap-3 text-neutral-600">
                          <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-base">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-neutral-100 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors">
            <Users className="w-5 h-5 text-neutral-600" />
            <span className="text-base font-medium text-neutral-800">Join Our Growing Community</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
