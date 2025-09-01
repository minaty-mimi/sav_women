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
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face',
      achievements: ['500+ Women Empowered', '10+ Programs Launched', 'Community Impact Award']
    },
    {
      name: 'Diana Moses',
      role: 'Program Director',
      quote: 'I lead our programs and initiatives, ensuring every woman has access to the resources and support she needs to thrive. Our community grows stronger every day.',
      image: '/light skined.png',
      achievements: ['Program Excellence', 'Mentorship Leader', 'Innovation Award']
    },
    {
      name: 'Halima Isa',
      role: 'Community Outreach',
      quote: 'I connect with communities and build partnerships to expand our reach and impact across different regions. Together, we\'re creating global change.',
      image: '/muslim.png',
      achievements: ['Global Partnerships', 'Community Builder', 'Outreach Excellence']
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-neutral-100 text-neutral-900 px-4 py-1 text-sm font-semibold">
            Meet Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The Visionaries Behind SAV WOMEN
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Meet our leaders driving change with passion and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stories.map((story, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-neutral-200">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {story.name}
                </h3>

                <Badge variant="outline" className="mb-3 bg-neutral-50 text-neutral-800 border-neutral-200 px-3 py-0.5 text-xs font-medium">
                  {story.role}
                </Badge>

                <p className="text-neutral-600 text-sm mb-4 italic">
                  "{story.quote}"
                </p>

                <div className="space-y-2">
                  {story.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center justify-center gap-2 text-sm text-neutral-600">
                      <Award className="w-4 h-4 text-neutral-400" />
                      <span>{achievement}</span>
                    </div>
                  ))}
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
