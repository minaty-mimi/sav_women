import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MessageCircle, Calendar, Award, ArrowRight } from 'lucide-react';

const Community: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Peer Network',
      description: 'Connect with like-minded women on similar journeys'
    },
    {
      icon: MessageCircle,
      title: 'Mentorship',
      description: 'Access to experienced mentors and coaching'
    },
    {
      icon: Calendar,
      title: 'Exclusive Events',
      description: 'Members-only workshops and networking events'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Celebrate achievements and milestones together'
    }
  ];

  const alumni = [
    {
      name: 'Sarah Mitchell',
      role: 'Tech Entrepreneur',
      cohort: '2022',
      achievement: 'Founded successful startup',
      quote: 'SAV WOMEN gave me the confidence to pursue my entrepreneurial dreams.',
      image: '/placeholder.svg'
    },
    {
      name: 'Priya Sharma',
      role: 'Community Leader',
      cohort: '2021',
      achievement: 'Led 5 community initiatives',
      quote: 'The leadership skills I gained here transformed my approach to community work.',
      image: '/placeholder.svg'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Healthcare Manager',
      cohort: '2023',
      achievement: 'Promoted to department head',
      quote: 'The support system here helped me navigate career challenges with confidence.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-neutral-100 text-neutral-900 px-4 py-1 text-sm font-semibold">
              Join Us
            </Badge>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Community</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
              Connect with a supportive network of empowered women committed to 
              growth and leadership.
            </p>
            <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white">
              Join the Community
            </Button>
          </div>

          {/* Program Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                Community Benefits
              </h2>
              <p className="text-neutral-600">What you'll gain by joining our community</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-neutral-600" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                    <p className="text-neutral-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Alumni Highlights */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                Success Stories
              </h2>
              <p className="text-neutral-600">Hear from our community members</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {alumni.map((person, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-neutral-900">{person.name}</h3>
                      <p className="text-sm text-neutral-600">{person.role}</p>
                      <Badge variant="secondary" className="mt-2 bg-neutral-100 text-neutral-800">
                        {person.cohort}
                      </Badge>
                    </div>
                    <div className="border-t border-neutral-100 pt-4">
                      <p className="text-sm text-neutral-600 mb-3 font-medium">{person.achievement}</p>
                      <p className="text-sm text-neutral-600 italic">"{person.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Private Area Teaser */}
          <Card className="bg-neutral-50 border-0 shadow-none">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                Get access to our private WhatsApp groups, exclusive resources, monthly virtual meetups, 
                and a supportive network of women who are committed to growth and empowerment.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/join">
                  <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white">
                    Apply to Join
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-neutral-300 hover:bg-neutral-100">
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;