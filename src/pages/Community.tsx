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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-green-800">Community</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with a supportive network of empowered women who are committed to 
              growth, leadership, and making a positive impact in their communities.
            </p>
            <Button size="lg" className="bg-green-800 hover:bg-green-900">
              Join the Alumni Circle <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Program Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Community Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-green-800 mx-auto mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Alumni Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Alumni Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {alumni.map((person, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-xl">{person.name}</CardTitle>
                    <p className="text-green-800 font-medium">{person.role}</p>
                    <Badge variant="outline" className="mt-2">
                      Cohort {person.cohort}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Key Achievement:</p>
                      <p className="text-sm text-gray-600">{person.achievement}</p>
                    </div>
                    <blockquote className="text-sm text-gray-600 italic">
                      "{person.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Private Area Teaser */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get access to our private WhatsApp groups, exclusive resources, monthly virtual meetups, 
              and a supportive network of women who are committed to growth and empowerment.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-green-800 hover:bg-green-900">
                  Apply to Join
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;